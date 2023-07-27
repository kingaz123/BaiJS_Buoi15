/**
 Khối 1: input
- Phí xử lý hóa đơn, dịch vụ, thuê kênh tương ứng cho nhà dân và doanh nghiệp (đề cho)
- Mã khách hàng (không cần xử lý tính toán gì)
- Loại khách hàng
- Số kênh cao cấp
- Số kết nối (nếu chọn loại khách hàng doanh nghiệp)



 
 Khối 2: Các bước xử lý
 + Tạo UI
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Kết quả thi"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Lấy loại khách hàng, số kênh, số kết nối (nếu có) từ các trường input
       - Kiểm tra nếu số kênh và số kết nối là số âm thì báo lỗi.
       - Tính số tiền cáp bằng cách sử dụng if else (if else lồng if else)
       if khách hàng là nhà dân -> tienCap = 4.5+20.5+ soKenh*7.5
       else if khách hàng là doanh nghiệp {if (soKetNoi <=10) {tiencap = 15 + 75 + soKenh*50} else {tiencap = 15 + 75 + (soKetNoi-10)*5 + soKenh*50}} else {alert("Làm ơn chọn loại khách hàng")}
       - In kết quả ra UI
       
 Khối 3: output
 - tiền cáp
 */

var nhaDan = document.getElementById("nhaDan");
var doanhNghiep = document.getElementById("doanhNghiep");
var ketNoi = document.getElementById("ketNoi");
function anHienKetNoi() {
  if (nhaDan.checked) {
    ketNoi.style.display = "none";
  } else {
    ketNoi.style.display = "block";
  }
}
document.getElementById("btnBai4").addEventListener("click", tinhTienCap);

function tinhTienCap() {
  //Lấy các giá trị từ các trường:
  var maKhachHang = document.getElementById("maKh").value;
  var soKenh = Number(document.getElementById("soKenh").value);
  var soKetNoi = Number(document.getElementById("soKetNoi").value);
  //Kiểm tra nếu số kênh và số kết nối là số âm thì báo lỗi.
  if (soKenh < 0) {
    alert("Số kênh không được là số âm");
    return;
  }
  if (soKetNoi < 0) {
    alert("Số kết nối không được là số âm");
    return;
  }
  var tienCap = 0;
  if (nhaDan.checked) {
    tienCap = 4.5 + 20.5 + soKenh * 7.5;
  } else if (doanhNghiep.checked) {
    if (soKetNoi <= 10) {
      tienCap = 15 + 75 + soKenh * 50;
    } else {
      tienCap = 15 + 75 + (soKetNoi - 10) * 5 + soKenh * 50;
    }
  } else {
    alert("Làm ơn chọn loại khách hàng");
  }
  document.getElementById("ketQua4").innerHTML =
    "Mã khách hàng: " +
    maKhachHang +
    "<br>" +
    "Tiền cáp phải trả: " +
    tienCap +
    "$";
}
