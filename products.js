// ===== DỮ LIỆU 20 MÓN ĂN - ĐÌNH QUÝ =====
const PRODUCTS = [
    // MÓN Á
    {
        id: 'M01', name: 'Phở Bò Đình Quý', category: 'asian', categoryName: 'Món Á',
        price: 85000,
        desc: 'Nước dùng hầm 12h, thịt bò tái chín',
        fullDesc: 'Phở bò truyền thống với nước dùng hầm từ xương bò 12 giờ, thịt bò tái chín mềm, bánh phở tươi và rau thơm. Món ăn đặc trưng của ẩm thực Việt Nam.',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop'
    },
    {
        id: 'M02', name: 'Bún Chả Hà Nội', category: 'asian', categoryName: 'Món Á',
        price: 75000,
        desc: 'Thịt nướng than hoa, bún tươi, rau sống',
        fullDesc: 'Bún chả Hà Nội chính gốc với thịt nướng than hoa thơm lừng, bún tươi, rau sống và nước chấm đậm đà.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&h=400&fit=crop'
    },
    {
        id: 'M03', name: 'Cơm Tấm Sườn Bì Chả', category: 'asian', categoryName: 'Món Á',
        price: 65000,
        desc: 'Sườn nướng mật ong, bì, chả trứng',
        fullDesc: 'Cơm tấm Sài Gòn với sườn nướng mật ong, bì heo, chả trứng và đồ chua. Ăn kèm nước mắm pha đặc biệt.',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop'
    },
    {
        id: 'M04', name: 'Gỏi Cuốn Tôm Thịt', category: 'asian', categoryName: 'Món Á',
        price: 45000,
        desc: 'Tôm sú tươi, thịt luộc, rau sạch',
        fullDesc: 'Gỏi cuốn tươi mát với tôm sú, thịt luộc, bún và rau thơm, chấm với tương đậu phộng béo ngậy.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&h=400&fit=crop&crop=entropy'
    },
    {
        id: 'M05', name: 'Bánh Xèo Miền Tây', category: 'asian', categoryName: 'Món Á',
        price: 55000,
        desc: 'Vỏ giòn, nhân tôm thịt đầy đặn',
        fullDesc: 'Bánh xèo miền Tây với vỏ giòn rụm, nhân tôm thịt đầy đặn, ăn kèm rau sống và nước mắm chua ngọt.',
        image: 'https://images.unsplash.com/photo-1625938145312-c24c1d84821e?w=600&h=400&fit=crop'
    },
    // MÓN ÂU
    {
        id: 'M06', name: 'Bò Bít Tết Úc', category: 'european', categoryName: 'Món Âu',
        price: 250000,
        desc: 'Sốt tiêu đen, khoai tây nghiền',
        fullDesc: 'Bò bít tết nhập khẩu từ Úc, chế biến theo công thức đặc biệt của đầu bếp Đình Quý. Thưởng thức cùng sốt tiêu đen đậm đà, khoai tây nghiền béo ngậy và rau củ tươi theo mùa.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop'
    },
    {
        id: 'M07', name: 'Mỳ Ý Sốt Cà Hải Sản', category: 'european', categoryName: 'Món Âu',
        price: 120000,
        desc: 'Tôm, mực, hàu tươi sốt cà chua',
        fullDesc: 'Mỳ Ý spaghetti với sốt cà chua hải sản tươi sống gồm tôm, mực và hàu. Hương vị Địa Trung Hải đậm đà.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop'
    },
    {
        id: 'M08', name: 'Súp Kem Nấm Hương', category: 'european', categoryName: 'Món Âu',
        price: 90000,
        desc: 'Kem tươi, nấm đùi gà, bánh mì',
        fullDesc: 'Súp kem nấm hương béo ngậy với kem tươi, nấm đùi gà và thưởng thức cùng bánh mì nướng giòn.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop'
    },
    {
        id: 'M09', name: 'Cá Hồi Áp Chảo', category: 'european', categoryName: 'Món Âu',
        price: 180000,
        desc: 'Sốt chanh dây, măng tây tươi',
        fullDesc: 'Cá hồi Na Uy áp chảo vàng giòn, sốt chanh dây chua thanh, ăn kèm măng tây tươi và khoai tây bỏ lò.',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop'
    },
    {
        id: 'M10', name: 'Salad Caesar Gà', category: 'european', categoryName: 'Món Âu',
        price: 110000,
        desc: 'Ức gà nướng, phô mai Parmesan',
        fullDesc: 'Salad Caesar cổ điển với ức gà nướng, xà lách romaine, phô mai Parmesan và sốt Caesar đặc biệt.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop'
    },
    // HẢI SẢN & MÓN NƯỚC
    {
        id: 'M11', name: 'Lẩu Thái Hải Sản', category: 'seafood', categoryName: 'Hải Sản & Món Nước',
        price: 350000,
        desc: 'Chua cay, tôm, mực, cá basa',
        fullDesc: 'Lẩu Thái chua cay đậm đà với hải sản tươi sống: tôm, mực, cá basa, nấm và rau củ. Nước lẩu thơm sả, chanh và ớt.',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop'
    },
    {
        id: 'M12', name: 'Canh Chua Cá Lóc', category: 'seafood', categoryName: 'Hải Sản & Món Nước',
        price: 120000,
        desc: 'Bạc hà, đậu bắp, me tươi',
        fullDesc: 'Canh chua cá lóc miền Nam với bạc hà, đậu bắp, cà chua và me tươi. Vị chua thanh, ngọt tự nhiên.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&crop=center'
    },
    {
        id: 'M13', name: 'Cháo Ghẹ Rau Củ', category: 'seafood', categoryName: 'Hải Sản & Món Nước',
        price: 150000,
        desc: 'Ghẹ thịt, rau củ quả tươi',
        fullDesc: 'Cháo ghẹ nóng hổi với thịt ghẹ tươi, rau củ quả và hành phi thơm. Món ăn bổ dưỡng, dễ tiêu.',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop&crop=faces'
    },
    {
        id: 'M14', name: 'Súp Cua Trứng Cút', category: 'seafood', categoryName: 'Hải Sản & Món Nước',
        price: 80000,
        desc: 'Thịt cua ghẹ, nấm đông cô',
        fullDesc: 'Súp cua đậm đà với thịt cua ghẹ, trứng cút, nấm đông cô và bột năng. Món khai vị hoàn hảo.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&crop=entropy'
    },
    {
        id: 'M15', name: 'Hàu Nướng Phô Mai', category: 'seafood', categoryName: 'Hải Sản & Món Nước',
        price: 45000,
        desc: 'Phô mai Mozzarella, hàu tươi',
        fullDesc: 'Hàu tươi nướng với phô mai Mozzarella béo ngậy, tỏi phi thơm. Mỗi con hàu to, thịt dày.',
        image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&h=400&fit=crop'
    },
    // THỨC UỐNG
    {
        id: 'M16', name: 'Trà Đào Cam Sả', category: 'drinks', categoryName: 'Thức Uống',
        price: 45000,
        desc: 'Đào miếng, cam tươi, sả thơm',
        fullDesc: 'Trà đào cam sả mát lạnh với đào miếng, cam tươi và sả thơm. Thức uống giải khát hoàn hảo.',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop'
    },
    {
        id: 'M17', name: 'Sinh Tố Bơ Sầu Riêng', category: 'drinks', categoryName: 'Thức Uống',
        price: 55000,
        desc: 'Bơ sáp, sầu riêng Ri6',
        fullDesc: 'Sinh tố bơ sáp béo ngậy kết hợp sầu riêng Ri6 thơm lừng. Thức uống bổ dưỡng, giàu dinh dưỡng.',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop'
    },
    {
        id: 'M18', name: 'Cà Phê Sữa Đá', category: 'drinks', categoryName: 'Thức Uống',
        price: 35000,
        desc: 'Cà phê Robusta rang mộc',
        fullDesc: 'Cà phê sữa đá Việt Nam với cà phê Robusta rang mộc, sữa đặc thơm béo. Đậm đà, tỉnh táo.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop'
    },
    {
        id: 'M19', name: 'Nước Ép Dưa Hấu', category: 'drinks', categoryName: 'Thức Uống',
        price: 40000,
        desc: 'Dưa hấu không hạt, tươi mát',
        fullDesc: 'Nước ép dưa hấu tươi mát từ dưa hấu không hạt. Giải nhiệt, giàu vitamin và khoáng chất.',
        image: 'https://images.unsplash.com/photo-1622597467536-70b3b5e1e7b7?w=600&h=400&fit=crop'
    },
    {
        id: 'M20', name: 'Soda Bạc Hà Chanh', category: 'drinks', categoryName: 'Thức Uống',
        price: 45000,
        desc: 'Bạc hà tươi, chanh vàng',
        fullDesc: 'Soda bạc hà chanh mát lạnh với bạc hà tươi, chanh vàng và soda. Thức uống sảng khoái, thanh mát.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop'
    }
];

// Hàm tiện ích: tìm món theo ID
function findProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

// Hàm tiện ích: lọc món theo category
function getProductsByCategory(category) {
    if (!category || category === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === category);
}

// Hàm format tiền
function formatMoney(amount) {
    return Number(amount || 0).toLocaleString('vi-VN') + 'đ';
}