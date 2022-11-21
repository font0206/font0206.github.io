// $(document).ready(function(){

//     $("#x").click(function(){
//       $(".appNav").slideToggle("slow");
//     });
//   });

$(document).ready(function () {
  $("#x").click(function () {
    $(".appNav").toggle();
  });
});


var products = document.getElementById("products");

var dataProduct = [{
  id: 1,
  url: "../img/mac13_2017.jpg",
  name: "Macbook 13 2017",
  price: 37690000,
  trademark: "Macbook",
  info: "Vi xử lý: Intel Core i5 7th, 2 nhân / 4 luồng <br> Màn hình: 13.3 Retina (2560 x 1600) <br> RAM: 8GB LPDDR3 bus 1866 MHz (Nâng cấp tối đa 8GB) <br> Card đồ họa: Intel Iris Plus 640 <br>Lưu trữ: 256GB NVMe(Nâng cấp tối đa 2TB) <br> Pin: 54.5Wh <br>Kết nối chính: 2 x USB-C with Thunderbolt 3 <br> Cân nặng: 1.37 kg <br> Hệ điều hành: Mac OS X",
  status: true,
  bestSale: true,
  soLuong: 1
}, {
  id: 2,
  url: "../img/dell_inspiron.jpg",
  name: "Dell Inspiron 3501",
  price: 19590000,
  trademark: "Dell",
  info: "Vi xử lý: Intel Core i3 1115G4, 2 nhân / 4 luồng <br>Màn hình: 15.6' FHD IPS (1920 x 1080) chống chói, công nghệ hiển thị WVA<br>Độ phủ màu: 60% sRGB, 45% NTSC<br>RAM: 4GB DDR4 bus 2666 MHz (Nâng cấp tối đa 32GB)<br> Card đồ họa: Intel UHD G4<br>Lưu trữ: 256GB m.2 NVMe (Nâng cấp tối đa 2TB)<br>Pin: 42Wh <br>Kết nối chính: 1 x USB-A 3.2 Gen 1, 2 x USB-A 2.0, 1 x SD, 1 x HDMI, 1 x RJ-45 <br>Cân nặng: 1.96kg <br>Hệ điều hành: Windows 10 Home SL bản quyền",
  status: true,
  bestSale: true,
  soLuong: 2
}, {
  id: 3,
  url: "../img/rog_ze.jpg",
  name: "Asus Rog Zephyrus G15",
  price: 24000000,
  trademark: "Asus",
  info: "Vi xử lý: AMD Ryzen 7 5800HS, 8 nhân / 16 luồng<br>Màn hình: 15.6 2K WQHD IPS (2560 x 1440) 165Hz, màn nhám<br>Độ phủ màu: 100% DCI-P3<br>RAM: 16GB DDR4 3200MHz (8GB Hàn trên mainboard + 8GB lắp rời)<br>Card đồ họa: Nvidia Geforce RTX 3060 6GB GDDR6 (TGP 80W + 20W Dynamic Boost)<br>Lưu trữ: 512GB NVMe (Nâng cấp tối đa 2TBx2)<br>Pin: 90Wh<br>Kết nối chính: 2 x USB-A 3.2 Gen 2, 2 x USB-C 3.2 Gen 2 (Hỗ trợ DisplayPort 1.4, Power Delivery 100W), 1 x HDMI 2.0b, 1 x Jack 3.5mm, 1 x RJ-45, 1 x microSD<br>Cân nặng: 1.9 kg<br>Hệ điều hành: Windows 10 Home SL bản quyền",
  status: true,
  bestSale: true,
  soLuong: 3
}, {
  id: 4,
  url: "../img/legion5-01.jpg",
  name: "Lenovo Legion 5 15IMH05",
  price: 25990000,
  trademark: "Lenovo",
  info: "Bộ Vi Xử Lý / CPU	Intel Core i7-10750H ( 2.60GHz upto 5.00GHz, 12MB cache, 6 cores 12 threads )<br>Bộ Nhớ Trong / RAM	8GB DDR4 2933MHz (2x SO-DIMM socket (còn 1 khe RAM) , up to 16GB SDRAM)<br>Ổ Cứng / HDD	512GB SSD M.2 2280 PCIe NVMe (còn trống x1 slot 2.5 SATA (HDD/SSD))<br>Màn hình / LCD	15.6 FHD (1920x1080) IPS (120Hz) 250nits Anti-glare, 45% Gamut<br> Chip Đồ Họa / VGA	NVIDIA GeForce GTX 1650 4GB GDDR6 & Intel UHD Graphics<br>Kết Nối / Network	WiFi 802.11ax (Wifi 6), Bluetooth 5.0<br>Giao Tiếp Mở Rộng	4 x USB 3.1 Gen 1 (one Always On) | 1 x USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2) | 1 x HDMI 2.0 | 1 x Ethernet (RJ-45) | headphone / microphone combo jack<br>Dung Lượng Pin	4 Cell 60WH<br>Hệ Điều Hành / Operating System	Win 10 Bản Quyền<br>Trọng Lượng / Weight	2.3 kg<br>Màu Sắc	Phantom Black<br>Xuất Xứ / Bảo Hành	Chính Hãng VN",
  status: true,
  bestSale: true,
  soLuong: 1
}, {
  id: 5,
  url: "../img/hp_pavi.jpg",
  name: "HP Pavilion 15",
  price: 26000000,
  trademark: "HP",
  info: "Vi xử lý: Intel Core i5-1135G7, 4 nhân / 8 luồng<br>Màn hình: 14.0' FHD IPS (1920 x 1080), chống chói<br>Độ phủ màu: 64% sRGB, 45% NTSC<br>RAM: 8GB DDR4 bus 3200 MHz (Nâng cấp tối đa 32GB)<br>Card đồ họa: Intel Iris Xe <br>Lưu trữ: 512GB m.2 NVMe (Nâng cấp tối đa 2TB) <br>Pin: 43Wh <br>Kết nối chính: 1 x USB-C 3.2 Gen 2 (Hỗ trợ xuất hình và Power Delivery), 2 x USB-A 3.2 Gen 1, 1 x SD, 1 x HDMI2.0, 1 x Jack 3.5mm <br>Cân nặng: 1.41kg <br>Hệ điều hành: Windows 10 Home SL + Office 2019 Home & Student bản quyền",
  status: true,
  bestSale: true,
  soLuong: 4
}, {
  id: 6,
  url: "../img/nitro5.jpg",
  name: "Acer NITRO 5",
  price: 23490000,
  trademark: "Acer",
  info: "Vi xử lý: AMD Ryzen 5 5600H, 6 nhân / 12 luồng<br>Màn hình: 15.6' Full HD IPS 144Hz (1920 x 1080), màn nhám<br>Độ phủ màu: 65% sRGB<br>RAM: 8GB DDR4 3200MHz (Nâng cấp tối đa 64GB)<br>Card đồ họa: Nvidia Geforce GTX 1650 4GB GDDR6<br>Lưu trữ: 512GB NVMe (Nâng cấp tối đa 2TBx2)<br>Pin: 57Wh<br>Kết nối chính: 3 x USB-A 3.2 Gen 1, 1 x USB-C, 1 x HDMI 2.0, 1 x RJ-45, 1 x 3.5mm<br>Cân nặng: 2.3 kg<br>Hệ điều hành: Windows 10 Home SL bản quyền",
  status: false,
  bestSale: true,
  soLuong: 1
}, {
  id: 7,
  url: "../img/msi katana.jpg",
  name: "MSI KATANA GF66",
  price: 29990000,
  trademark: "MSI",
  info: "Vi xử lý: Intel Core i7-11800H, 8 nhân / 16 luồng<br>Màn hình: 17.3' FHD IPS 144Hz (1920x1080) chống chói<br>Độ phủ màu: 45% NTSC<br>RAM: 8GB DDR4 bus 3200MHz (Nâng cấp tối đa 64GB)<br>Card đồ họa: Nvidia Geforce RTX 3050 4GB GDDR6 (TGP 60W)<br>Lưu trữ: 512GB m.2 NVMe (Nâng cấp tối đa 2TB) <br>Pin: 53.5Wh<br>Kết nối chính: 2 x USB-A 3.2 Gen 1, 1 x USB-A 2.0, 1 x USB-C 3.2 Gen 1, 1 x HDMI 2.0, 1 x RJ-45, 1 x jack 3.5mm<br>Cân nặng: 2.6kg<br>Hệ điều hành: Windows 10 Home SL bản quyền",
  status: true,
  bestSale: false,
  soLuong: 1
}, {
  id: 8,
  url: "../img/tuf dash.jpg",
  name: "ASUS TUF DASH F15",
  price: 28590000,
  trademark: "Asus",
  info: "Vi xử lý: Intel Core i5 10300H, 4 nhân / 8 luồng<br>Màn hình: 15.6' Full HD IPS (1920 x 1080) 60Hz, màn nhám<br>Độ phủ màu: 65% sRGB<br>RAM: 8GB DDR4 2933MHz (Nâng cấp tối đa 32GB)<br>Card đồ họa: Nvidia Geforce GTX 1650Ti 4GB GDDR6<br>Lưu trữ: 256GB NVMe (Nâng cấp tối đa 2TB)<br>Pin: 48Wh<br>Kết nối chính: 3 x USB-A, 1 x USB-C, 1 x HDMI, 1 x Jack 3.5mm<br>Cân nặng: 2.3 kg<br>Hệ điều hành: Windows 10 Home SL bản quyền",
  status: false,
  bestSale: false,
  soLuong: 1
}, {
  id: 9,
  url: "../img/macm1.jpg",
  name: "Macbook Pro 2019",
  price: 58990000,
  trademark: "Macbook",
  info: "Vi xử lý: Apple M1, 8 nhân<br>Màn hình: 13.3' Retina (2560 x 1600), gương<br>RAM: 8GB LPDDR4x<br>Card đồ họa: Apple GPU <br>Lưu trữ: 256GB NVMe <br>Pin: 58Wh <br>Kết nối chính: 2 x USB-C with Thunderbolt 3 + USB4 <br>Cân nặng: 1.4 kg <br>Hệ điều hành: Mac OS X",
  status: true,
  bestSale: false,
  soLuong: 1
}, {
  id: 10,
  url: "../img/mac16.jpg",
  name: "Macbook Air 2020 Retina",
  price: 30990000,
  trademark: "Macbook",
  info: "Vi xử lý: Intel Core i5, 4 nhân / 8 luồng<br>Màn hình: 13.3' Retina (2560 x 1600), gương<br>RAM: 8GB LPDDR4X bus 3733 MHz (Nâng cấp tối đa 8GB)<br>Card đồ họa: Intel Iris Plus G4 <br>Lưu trữ: 256GB NVMe <br>Pin: 49.9 WHr <br>Kết nối chính: 2 x USB-C with Thunderbolt 3 <br>Hệ điều hành: Mac OS X",
  status: false,
  bestSale: true,
  soLuong: 1
}, {
  id: 11,
  url: "../img/msi_bra.jpg",
  name: "MSI Bravo 15",
  price: 42999000,
  trademark: "MSI",
  info: "Vi xử lý: AMD Ryzen 5 5600H, 6 nhân / 12 luồng<br>Màn hình: 15.6' FHD IPS 144Hz (1920x1080) chống chói<br>Độ phủ màu: 45% NTSC<br>RAM: 8GB DDR4 bus 3200 MHz (Nâng cấp tối đa 64GB)<br>Card đồ họa: AMD Radeon RX 5500M 4GB GDDR6<br>Lưu trữ: 512GB m.2 NVMe (Nâng cấp tối đa 2TBx2)<br>Pin: 51Wh <br>Kết nối chính: 2 x USB-A 3.2 Gen 1, 2 x USB-C 3.2 Gen 1, 1 x HDMI, 1 x RJ-45, 1 x jack 3.5mm <br>Cân nặng: 1.96kg <br>Hệ điều hành: Windows 10 Home SL bản quyền",
  status: false,
  bestSale: false,
  soLuong: 1
}, {
  id: 12,
  url: "../img/Asus vivo.jpg",
  name: "ASUS VivoBook S433EA",
  price: 17990000,
  trademark: "Asus",
  info: "Vi xử lý: Intel Core i5 1135G7, 4 nhân / 8 luồng<br>Màn hình: 15.6' FHD IPS (1920 x 1080) chống chói<br>Độ phủ màu: 60% sRGB<br>RAM: 8GB DDR4 bus 3200MHz (Hàn trên mainboard - Không thể nâng cấp)<br>Card đồ họa: Intel Iris Xe<br>Lưu trữ: 512GB m.2 NVMe (Nâng cấp tối đa 2TB)<br>Pin: 50Wh<br>Kết nối chính: 1 x USB-C 3.2 Gen 1, 1 x USB-A 3.2 Gen 1, 2 x USB-A 2.0, Micro SD<br>Cân nặng: 1.8kg<br>Hệ điều hành: Windows 10 Home Single Language bản quyền",
  status: false,
  bestSale: true,
  soLuong: 2
}
]

function pushDataAll() {
  for (var data of dataProduct) {
    var product = `<div id="${data.id}"  class="card product col col-6 col-md-4 col-lg-3 p-0 text-lg-center">
    <div class="">
      <img src="${data.url}" class="card-img-top card-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.name} </h5>
        <p class="card-text">${data.price}</p>
        <a href="#" class="btn btn-danger"><i class="fas fa-plus"></i></i> <span>Xem chi tiết</span> </a>
      </div>
    </div>
  </div>`;
    products.innerHTML += product;
  }
}
function pushData(dataProduct) {
  for (var data of dataProduct) {
    var product = `<div class="card col col-6 col-md-4 col-lg-3 p-0 text-lg-center">
        <div class="">
          <img src="${data.url}" class="card-img-top card-img" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.name} </h5>
            <p class="card-text">${data.price}</p>
            <a href="#" class="btn btn-danger"><i class="fas fa-plus"></i></i> <span>Xem chi tiết</span> </a>
          </div>
        </div>
      </div>`;
    products.innerHTML += product;
  }
}

function checkBestSale(value) {
  return value == true;
}
function checkNew(value) {
  return value == true;
}
// function checkMac(value) {
//   return value == 'Macbook';
// }
// function checkDell(value) {
//   return value == 'Dell';
// }
// function checkLenovo(value) {
//   return value == 'Lenovo';
// }
// function checkHP(value) {
//   return value == 'HP';
// }
// function checkHP(value) {
//   return value == 'Acer';
// }
// function checkAsus(value) {
//   return value == 'Asus';
// }
// function checkMSI(value) {
//   return value == 'MSI';
// }
var rsBestSale = dataProduct.filter(function (value) {
  return checkBestSale(value.bestSale);
});
var rsNew = dataProduct.filter(function (value) {

  return checkNew(value.status);
});

var pushProducts = function (id) {
  if (id == 'loc1') {
    pushDataAll();
  } else if (id == 'loc2') {
    pushData(rsBestSale);
  } else if (id == 'loc3') {
    pushData(rsNew);
  }
}



//lay info

var getProduct = function (id) {
  var product = dataProduct.find(function (p) {
    return p.id == id;
  })
  return product;
}

var listProduct = [{ id: 1, n: 2 }, { id: 2, n: 3 }];

var listUser = [{
  username: 'phonggg',
  password: '123456',
  product: listProduct
}];

function saveListUser() {
  var list = JSON.parse(localStorage.getItem("listUser"));
  if (list)
    listUser = list;
}
saveListUser();


function objDangKi(username, password, card) {
  card = [];
  var obj = Object();
  //obj.name = name;
  obj.username = username;
  obj.password = password;
  //obj.mail = mail;
  //obj.phone = phone;
  obj.toJson = function () {
    var json = JSON.stringify(this);
    return json;
  }
  obj.fromJSON = function (json) {
    var objFull = new Object();
    var obj = JSON.parse(json);
    var objFull = objDangKi(obj.username, obj.password, obj.card)
    return objFull;
  }
  return obj;

}




function checkLogin() {
  var user = JSON.parse(localStorage.getItem("userCurrent"));
  var names = document.getElementsByClassName("idName");
  var loginMB = document.getElementById("dangnhapMB");
  var logout = document.getElementById("btn_listLog");
  var logoutMB = document.getElementById("btn_listLogMB");
  var caNhan = document.getElementById('btn_canhan');
  var btnUser = document.getElementById("btnUser");
  var btnLoginmobile = document.getElementById("nameMobie");
  var demcart = document.getElementById("demcart");
  var cartLogin = document.getElementById("cartMB");
  var cartPC = document.getElementById("cartPC");
  var totalProduct = document.querySelector(".totalProduct");
  if (user) {
    
    for (var i of names) {
      i.innerHTML = user.name;
    }
    
    logout.innerText = "Đăng Xuất";
    caNhan.innerText = "Cá nhân";
    logoutMB.innerText = "Đăng xuất";
    loginMB.style.display = "none";
    demcart.style.display = "block";
    totalProduct.innerText = user.product.length;


    // cartLogin.window.location ="./cart.html";



    
    btnUser.addEventListener('click', function (event) {
      event.preventDefault();
      // btnLoginpc.add
    });
    btnLoginmobile.addEventListener('click', function (event) {
      event.preventDefault();

    });
    logout.addEventListener('click', function (event) {
      event.preventDefault();
      // localStorage.removeItem('userCurrent');
      localStorage.removeItem('userCurrent');
      // logout();
      window.location = "./login.html";
    });
    logoutMB.addEventListener('click', function (event) {
      event.preventDefault();
      localStorage.removeItem('userCurrent');
      // logout();
      window.location = "./login.html";
    });
    cartLogin.addEventListener('click', function (e) {
      e.preventDefault();
      window.location = "./cart.html";
    });
    cartPC.addEventListener('click', function (e) {
      e.preventDefault();
      window.location = "./cart.html";
    });

    return user;
  }
  return "";
}

var bool = Boolean(checkLogin());
var userNow = checkLogin();
console.log(bool);

// function logout(){
//   localStorage.removeItem('userCurrent');

// }

// function checklogin() {
//   var user = JSON.parse(localStorage.getItem('userCurrent'));
//   if (user) {
//     return user;
//   }

//   return undefined;
// }

// var userCurrent = checklogin();
// if (userCurrent) {
//   document.getElementById(iduser).innerText = userCurrent.username; 
// }

function addProductToCart() {
  var product = { id: 1, n: 2 };
  userCurrent.cart.push(product)
  localStorage.setItem('userCurrent', JSON.stringify(userCurrent));
  var listus = JSON.parse(localStorage.getItem('listUser'));
  var index = listus.findIndex(function (x) {
    return x.username === userCurrent.username;
  });
  listus[index] = userCurrent;
  localStorage.setItem('listUser', JSON.stringify(listus));
}

//check form đăng kí
var txtName = document.querySelector('#txtName');
var txtUserName = document.querySelector('#txtUserName');
var txtPass = document.querySelector('#txtPass');
var txtRePass = document.querySelector('#txtRePass');
var txtPhone = document.querySelector('#txtPhone');
var txtMail = document.querySelector('#txtMail');
function checkDangKi() {
  var form = document.querySelector('#frmdangky');
  var data = Object.fromEntries(new FormData(form).entries());
  var regName = /^([A-Z][a-z]+)(\s+[A-Z][a-z]+)+$/; //phải có họ và tên chữ cái đầu tiên của tên và họ phải bắt đầu bằng chữ in hoa
  var regUserName = /(?=.*[a-zA-Z_0-9])\w{6,}/; // ít nhất phải có 6 ký tự không chứa ký tự đặc biệt
  var regPassword = /^(?=.*[0-9])(?=.*[a-z])([a-zA-Z0-9]{8,})$/; //phải có 8 ký tự trở lên và có ít nhất 1 số
  var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var regPhone = /[0-9]{10}/; // số điện thoại phải là số và có 10 chữ số 

  var lbUserName = document.querySelector("#erUserName");
  var lbMatKhau = document.querySelector("#erPass");
  var lbNhapLaiMatKhau = document.querySelector("#erRePass");
  var lbTen = document.querySelector("#erName");
  var lbDt = document.querySelector("#erPhone");
  var lbEmail = document.querySelector("#erMail");


  if (!regName.test(txtName.value)) {
    lbTen.innerText = "Chữ cái đầu tiên phải bắt đầu bằng chữ in hoa và phải có họ và tên";
    return false;
  }
  lbTen.innerText = "";

  if (!regUserName.test(txtUserName.value)) {
    lbUserName.innerText = "Tên đăng nhập ít nhất phải có 6 ký tự không chứa ký tự đặc biệt";
    return false;
  }
  lbUserName.innerText = "";

  if (!regPassword.test(txtPass.value)) {
    lbMatKhau.innerText = "Mật khẩu phải có 8 ký tự trở lên và có ít nhất 1 số";
    return false;
  }
  lbMatKhau.innerText = "";

  if (txtPass.value !== txtRePass.value) {
    lbNhapLaiMatKhau.innerText = "Mật khẩu chưa khớp";
    return false;
  }
  lbNhapLaiMatKhau.innerText = "";


  if (!regEmail.test(txtMail.value)) {
    lbEmail.innerText = "vui lòng điền đúng định dạng email";
    return false;
  }
  lbEmail.innerText = "";

  if (!regPhone.test(txtPhone.value)) {
    lbDt.innerText = "số điện thoại phải là số và có 10 chữ số ";
    return false;
  }
  lbDt.innerText = "";

  return true;
}

//click thêm vào giỏ hàng
var i = 0;
// thêm sản phẩm
function addRow(product) {
  var table = document.getElementById("datarow");

  var row = `
    <tr>
        <td class="text-center" >${++i}</td>
        <td class="text-center" >
            <img src="${product.url}" class="img-product w-25">
        </td>
        <td class="text-center" >${product.name}</td>
        <td class="text-center">${product.price}</td>
        <td class="text-center d-flex justify-content-center">
            <input style="width: 45px; border: none; outline: none;" type="number"  readonly
            class="d-block" name="number" id="number" value="${product.soLuong}" onchange ="totalPrice();" min="1">
        </td>
        <td class="text-center">${product.price * product.soLuong}"</td>
        <td class="text-center">
            <a href="#!" id="${product.id}" class="btn btn-danger btn-delete-sanpham">
            <i class="fas fa-times"></i>
            </a>
        </td>
    </tr>
`;
  var newRow = table.insertRow(table.length);
  newRow.innerHTML = row;
}
//LOGIN CART
function userCartList(user) {
  var productss = [];
  if (user) {
    var listProduct = user.product;
    for (var item of listProduct) {
      var product = dataProduct.find(function (value) {
        return value.id == item.id;
      });
      product.soLuong = item.n;
      productss.push(product)
    }
  }
  return productss;
}

var addProduct = function (productss) {
  var prd = productss(checkLogin());
  if (prd) {
    for (var product of prd) {
      addRow(product);
    }
    totalPrice();
    return true;
  }
  return false;
}
var removeByAttr = function (arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (arr[i]
      && arr[i].hasOwnProperty(attr)
      && (arr[i][attr] === value)) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

function deleteItemInCart(product) {
  removeByAttr(userNow.product, "id", product);
  var userCurrent = userNow;
  localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
}

function whenChageQty() {
  var numbers = document.querySelectorAll("#datarow #number");
  var products = userNow.product;
  for (var number in numbers) {
    if (numbers.hasOwnProperty(number)) {
      products[number].n = numbers[number].value;
      // console.log(numbers[number].value);
    }
  }
  var userCurrent = userNow;
  localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
}

// tổng giá 
var totalPrice = function () {
  var table = document.getElementById("datarow");
  var deletes = document.querySelectorAll(".btn-delete-sanpham");
  var totalPr = 0;
  for (var i = 0; i < table.rows.length; ++i) {
    var quantity = table.rows[i].cells[4].querySelector("input").value;
    var price = table.rows[i].cells[3].innerText;
    var total = quantity * price;
    table.rows[i].cells[5].innerText = total;
    totalPr += total;
    deletes[i].onclick = () => {
      table.deleteRow(--i);
      totalPrice();
      deleteItemInCart(deletes[i].id);
    }
  }
  document.getElementById("totalPrice").innerText = totalPr;
  return totalPr;
}
// totalPrice();

var getThongTin = function (user) {
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
}
var pay = function () {

  // lấy sản phẩm từ user ra
  var list = document.getElementById("listProductPay");
  var product = userCartList(userNow);
  var total = 0;
  for (var p of product) {
    var item = `
      <li class="list-group-item d-flex justify-content-between ">
          <div>
              <h4 class="my-0">${p.name}</h4>
              <small class="text-muted">${p.price} x ${p.soLuong} </small>
          </div>
          <span class="text-muted">${p.soLuong}</span>
      </li>
      `;
    list.innerHTML += item;
    total += p.price * p.soLuong;
  }
  var totalPrice = `
      <li class="list-group-item d-flex justify-content-between">
          <span>Tổng thành tiền</span>
          <strong id="thanhTien">${total}</strong>
      </li>
  `;
  list.innerHTML += totalPrice;
}






