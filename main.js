// ============================================
// HỆ THỐNG QUẢN LÝ NHÀ HÀNG ĐÌNH QUÝ
// JavaScript xử lý tương tác THẬT SỰ
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. XỬ LÝ FILTER SẢN PHẨM (menu.html)
    // ==========================================
    const productCards = document.querySelectorAll('.product-card');
    const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"][value]');
    const priceRadios = document.querySelectorAll('input[name="price"]');
    const sortRadios = document.querySelectorAll('input[name="sort"]');

    function filterProducts() {
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        const selectedPrice = document.querySelector('input[name="price"]:checked')?.value || 'all';

        productCards.forEach(card => {
            const category = card.dataset.category;
            const price = parseInt(card.dataset.price);
            
            let showByCategory = selectedCategories.includes(category);
            let showByPrice = true;

            if (selectedPrice !== 'all') {
                const [min, max] = selectedPrice.split('-').map(v => v === 'max' ? Infinity : parseInt(v));
                showByPrice = price >= min && price <= max;
            }

            card.style.display = (showByCategory && showByPrice) ? 'block' : 'none';
        });

        sortProducts();
    }

    function sortProducts() {
        const selectedSort = document.querySelector('input[name="sort"]:checked')?.value || 'default';
        const productList = document.getElementById('product-list');
        if (!productList) return;
        const cards = Array.from(productList.querySelectorAll('.product-card'));

        if (selectedSort === 'price-asc') {
            cards.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
        } else if (selectedSort === 'price-desc') {
            cards.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
        }

        cards.forEach(card => productList.appendChild(card));
    }

    categoryCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));
    priceRadios.forEach(radio => radio.addEventListener('change', filterProducts));
    sortRadios.forEach(radio => radio.addEventListener('change', filterProducts));

    // ==========================================
    // 2. XỬ LÝ LOGIN TABS (login.html)
    // ==========================================
    const roleCards = document.querySelectorAll('.role-card');
    const loginForms = document.querySelectorAll('.login-form-section');

    roleCards.forEach(card => {
        card.addEventListener('click', function() {
            const role = this.dataset.role;
            roleCards.forEach(c => c.classList.remove('active'));
            loginForms.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(`${role}-form`).classList.add('active');
        });
    });

    // ==========================================
    // 3. XỬ LÝ VALIDATE FORM (reservation.html, register.html)
    // ==========================================
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            const phoneRegex = /^[0-9]{10,11}$/;
            const errorMsg = this.parentElement.querySelector('.error-message');
            
            if (this.value && !phoneRegex.test(this.value)) {
                this.classList.add('error');
                this.classList.remove('success');
                if (errorMsg) errorMsg.classList.add('show');
            } else if (this.value && phoneRegex.test(this.value)) {
                this.classList.remove('error');
                this.classList.add('success');
                if (errorMsg) errorMsg.classList.remove('show');
            } else {
                this.classList.remove('error', 'success');
                if (errorMsg) errorMsg.classList.remove('show');
            }
        });
    });

    // ==========================================
    // 4. XỬ LÝ GIỎ HÀNG (cart.html) - THÊM/XÓA/CẬP NHẬT
    // ==========================================
    const cartItems = document.querySelectorAll('.cart-item');
    const cartItemsContainer = document.querySelector('.cart-items');
    
    if (cartItemsContainer) {
        // Xử lý nút tăng/giảm số lượng
        document.querySelectorAll('.quantity-control button').forEach(btn => {
            btn.addEventListener('click', function() {
                const span = this.parentElement.querySelector('span');
                let qty = parseInt(span.textContent);
                if (this.classList.contains('increase')) qty++;
                else if (this.classList.contains('decrease') && qty > 1) qty--;
                span.textContent = qty;
                updateCartTotal();
            });
        });

        // Xử lý nút Xóa món
        document.querySelectorAll('.btn-delete-item').forEach(btn => {
            btn.addEventListener('click', function() {
                if (confirm('Bạn có chắc muốn xóa món này khỏi giỏ hàng?')) {
                    const item = this.closest('.cart-item');
                    item.style.transition = 'all 0.3s';
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(20px)';
                    setTimeout(() => {
                        item.remove();
                        updateCartTotal();
                        checkCartEmpty();
                    }, 300);
                }
            });
        });
    }

    function updateCartTotal() {
        const items = document.querySelectorAll('.cart-item');
        let total = 0;
        items.forEach(item => {
            const priceText = item.querySelector('.item-price')?.textContent || '0';
            const qty = parseInt(item.querySelector('.quantity-control span')?.textContent || '1');
            const price = parseInt(priceText.replace(/\D/g, ''));
            total += price * qty;
        });
        const totalEl = document.querySelector('.summary-total span:last-child');
        if (totalEl) totalEl.textContent = total.toLocaleString('vi-VN') + 'đ';
    }

    function checkCartEmpty() {
        const items = document.querySelectorAll('.cart-item');
        if (items.length === 0 && cartItemsContainer) {
            cartItemsContainer.innerHTML = '<div style="text-align:center; padding:40px; color:#666;"><h3>Giỏ hàng trống</h3><p><a href="menu.html" class="btn btn-primary" style="margin-top:15px;">Đi mua sắm</a></p></div>';
        }
    }

    // ==========================================
    // 5. XỬ LÝ THÊM/XÓA MÓN (menu.html - admin)
    // ==========================================
    const btnAddProduct = document.getElementById('btn-add-product');
    if (btnAddProduct) {
        btnAddProduct.addEventListener('click', function() {
            const name = prompt('Tên món ăn:');
            if (!name) return;
            const price = prompt('Giá (VNĐ):');
            if (!price) return;
            const category = prompt('Danh mục (asian/european/seafood/drinks):');
            
            const productList = document.getElementById('product-list');
            const newCard = document.createElement('div');
            newCard.className = 'product-card';
            newCard.dataset.category = category || 'asian';
            newCard.dataset.price = price;
            newCard.innerHTML = `
                <img src="https://placehold.co/400x300/b8860b/ffffff?text=${encodeURIComponent(name)}" alt="${name}">
                <div class="product-card-content">
                    <h3>${name}</h3>
                    <p class="description">Món mới thêm</p>
                    <p class="price">${parseInt(price).toLocaleString('vi-VN')}đ</p>
                    <button class="btn btn-delete-item" style="background:#dc3545; color:white; border:none; padding:8px 12px; border-radius:5px; cursor:pointer;">Xóa</button>
                </div>
            `;
            productList.appendChild(newCard);
            
            // Gắn sự kiện xóa cho nút mới
            newCard.querySelector('.btn-delete-item').addEventListener('click', function() {
                if (confirm('Xóa món này?')) {
                    newCard.remove();
                }
            });
            
            alert(`Đã thêm món "${name}" thành công!`);
        });
    }

    // ==========================================
    // 6. XỬ LÝ ĐỔI TRẠNG THÁI (admin - dropdown)
    // ==========================================
    document.querySelectorAll('.status-select').forEach(select => {
        select.addEventListener('change', function() {
            const row = this.closest('tr');
            const badge = row.querySelector('.badge');
            const status = this.value;
            
            // Xóa class cũ
            badge.className = 'badge';
            
            // Thêm class mới theo trạng thái
            if (status === 'available' || status === 'success' || status === 'paid' || status === 'instock') {
                badge.classList.add('badge-success');
                badge.textContent = this.options[this.selectedIndex].text;
            } else if (status === 'occupied' || status === 'warning' || status === 'pending' || status === 'lowstock') {
                badge.classList.add('badge-warning');
                badge.textContent = this.options[this.selectedIndex].text;
            } else if (status === 'reserved' || status === 'danger' || status === 'outofstock') {
                badge.classList.add('badge-danger');
                badge.textContent = this.options[this.selectedIndex].text;
            } else if (status === 'processing') {
                badge.classList.add('badge-info');
                badge.textContent = this.options[this.selectedIndex].text;
            }
            
            // Hiệu ứng flash
            row.style.background = '#fff9e6';
            setTimeout(() => { row.style.background = ''; }, 500);
            
            console.log(`Đã đổi trạng thái thành: ${status}`);
        });
    });

    // ==========================================
    // 7. XỬ LÝ CLICK ĐỔI TRẠNG THÁI BÀN (table-manage.html)
    // ==========================================
    document.querySelectorAll('.table-card').forEach(card => {
        card.addEventListener('click', function() {
            const states = [
                { class: 'available', text: 'Trống', status: 'available' },
                { class: 'occupied', text: 'Đang dùng', status: 'occupied' },
                { class: 'reserved', text: 'Đã đặt', status: 'reserved' }
            ];
            
            let currentIndex = states.findIndex(s => this.classList.contains(s.class));
            let nextIndex = (currentIndex + 1) % states.length;
            let nextState = states[nextIndex];
            
            // Xóa class cũ
            states.forEach(s => this.classList.remove(s.class));
            
            // Thêm class mới
            this.classList.add(nextState.class);
            this.querySelector('.table-status').textContent = nextState.text;
            this.querySelector('.table-status').className = 'table-status';
            
            console.log(`Bàn ${this.querySelector('.table-number').textContent}: ${nextState.text}`);
        });
    });

    // ==========================================
    // 8. XỬ LÝ NÚT XÓA ROW (admin tables)
    // ==========================================
    document.querySelectorAll('.btn-delete-row').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Bạn có chắc muốn xóa dòng này?')) {
                const row = this.closest('tr');
                row.style.transition = 'all 0.3s';
                row.style.opacity = '0';
                setTimeout(() => row.remove(), 300);
            }
        });
    });

    // ==========================================
    // 9. XỬ LÝ NÚT THÊM ROW (admin tables)
    // ==========================================
    document.querySelectorAll('.btn-add-row').forEach(btn => {
        btn.addEventListener('click', function() {
            const tableBody = this.closest('.data-table').querySelector('tbody');
            if (!tableBody) return;
            
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="text" placeholder="Nhập..." style="padding:5px; border:1px solid #ddd; border-radius:3px;"></td>
                <td><input type="text" placeholder="Nhập..." style="padding:5px; border:1px solid #ddd; border-radius:3px;"></td>
                <td><input type="text" placeholder="Nhập..." style="padding:5px; border:1px solid #ddd; border-radius:3px;"></td>
                <td><input type="text" placeholder="Nhập..." style="padding:5px; border:1px solid #ddd; border-radius:3px;"></td>
                <td>
                    <select class="status-select" style="padding:5px; border:1px solid #ddd; border-radius:3px;">
                        <option value="success">Hoạt động</option>
                        <option value="warning">Chờ xử lý</option>
                        <option value="danger">Ngừng</option>
                    </select>
                </td>
                <td>
                    <button class="btn-delete-row" style="background:#dc3545; color:white; border:none; padding:5px 10px; border-radius:3px; cursor:pointer;">Xóa</button>
                </td>
            `;
            tableBody.appendChild(newRow);
            
            // Gắn sự kiện cho nút xóa mới
            newRow.querySelector('.btn-delete-row').addEventListener('click', function() {
                if (confirm('Xóa dòng này?')) {
                    newRow.remove();
                }
            });
            
            // Gắn sự kiện đổi trạng thái
            newRow.querySelector('.status-select').addEventListener('change', function() {
                const badge = this.parentElement.parentElement.querySelector('.badge');
                if (badge) {
                    badge.className = 'badge badge-' + this.value;
                    badge.textContent = this.options[this.selectedIndex].text;
                }
            });
        });
    });

    // ==========================================
    // 10. XỬ LÝ FORM SUBMIT (prevent default + alert)
    // ==========================================
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            // Kiểm tra validate SĐT
            const phoneInput = this.querySelector('input[type="tel"]');
            if (phoneInput) {
                const phoneRegex = /^[0-9]{10,11}$/;
                if (!phoneRegex.test(phoneInput.value)) {
                    e.preventDefault();
                    phoneInput.classList.add('error');
                    const errorMsg = phoneInput.parentElement.querySelector('.error-message');
                    if (errorMsg) errorMsg.classList.add('show');
                    phoneInput.focus();
                    return;
                }
            }
            
            // Chỉ prevent default cho form demo (không có action thật)
            if (this.action === '#' || this.action === '') {
                e.preventDefault();
                alert('✅ Form đã được gửi thành công! (Demo - chưa kết nối server)');
            }
        });
    });

    // ==========================================
    // 11. XỬ LÝ TABS (product-detail.html)
    // ==========================================
    document.querySelectorAll('.tab-buttons button').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ==========================================
    // 12. XỬ LÝ MODAL CHI TIẾT BÀN (table-manage.html)
    // ==========================================
    document.querySelectorAll('.table-card').forEach(card => {
        card.addEventListener('dblclick', function() {
            const tableNum = this.querySelector('.table-number').textContent;
            const status = this.querySelector('.table-status').textContent;
            const capacity = this.querySelector('.table-capacity').textContent;
            alert(`📋 Chi tiết ${tableNum}\n👥 Sức chứa: ${capacity}\n📊 Trạng thái: ${status}\n\n(Double-click để xem chi tiết)`);
        });
    });

    console.log('✅ Hệ thống JS Nhà hàng Đình Quý đã khởi động!');
});