/**
 Khối 1: input
- Họ và tên khách hàng (chỉ sử dụng để hiển thị họ tên khách hàng ở phần output, không qua bước xử lý tính toán gì) 
- Tổng thu nhập năm
- Số người phụ thuộc

 
 Khối 2: Các bước xử lý
 + Tạo UI
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Kết quả thi"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Kiểm tra xem các trường đã được nhập đầy đủ hay chưa, nếu chưa thì báo lỗi.
       - Lấy giá trị tổng thu nhập năm và số người phụ thuộc từ ô input
       - Kiểm tra nếu tổng thu nhập và số người phụ thuộc là số âm thì báo lỗi.
       - Tính số tiền bị chịu đánh thuế theo công thức:
       chiuThue = tongTien - 4000000 - soNguoi*1600000
       - Tính số tiền Thuế bằng cách sử dụng if else_
       if chiuThue <=60: chiuThue*5%
       else if chiuThue <=120: chiuThue*10%
       else if chiuThue <=210: chiuThue*15%
       ......
       else if chiuThue > 960: chiuThue*30%
       else alert("Số tiền không hợp lệ")
 
 Khối 3: output
 - tiền thuế
 */

function tinhThue() {
  // Kiểm tra xem các trường có được nhập đầy đủ hay chưa, nếu chưa thì thông báo lỗi
  if (
    document.getElementById("hoTen").value === "" ||
    document.getElementById("tongTn").value === "" ||
    document.getElementById("soNguoi").value === ""
  ) {
    alert("Vui lòng nhập đầy đủ và chính xác các trường");
    return;
  }
  //Lấy các giá trị từ các trường:
  var hoTen = document.getElementById("hoTen").value;
  var tongTien = Number(document.getElementById("tongTn").value);
  var soNguoi = Number(document.getElementById("soNguoi").value);
  //Kiểm tra nếu tổng thu nhập và số người phụ thuộc là số âm thì báo lỗi.
  if (tongTien < 0 || soNguoi < 0) {
    alert("Tổng thu nhập năm và số người phụ thuộc không được là số âm");
    return;
  }
  //Tính số tiền chịu thuế:
  var chiuThue = tongTien - 4000000 - soNguoi * 1600000;
  // Tính tiền thuế
  var tienThue = 0;
  if (chiuThue >= 0 && chiuThue <= 60000000) {
    tienThue = (chiuThue * 5) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 120000000) {
    tienThue = (chiuThue * 10) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 210000000) {
    tienThue = (chiuThue * 15) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 384000000) {
    tienThue = (chiuThue * 20) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 624000000) {
    tienthue = (chiuThue * 25) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 960000000) {
    tienThue = (chiuThue * 30) / 100;
  } else if (chiuThue >= 0 && chiuThue > 960000000) {
    tienThue = (chiuThue * 35) / 100;
  } else {
    tienThue = 0;
  }
  document.getElementById("ketQua3").innerHTML =
    "Họ và tên người chịu thuế: " +
    hoTen +
    "<br>" +
    "Số tiền thuế phhải nộp là " +
    tienThue.toLocaleString() +
    " VND";
}
