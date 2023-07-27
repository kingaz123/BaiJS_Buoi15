/**
 Khối 1: input
- tên (chỉ sử dụng để hiển thị tên khách hàng ở phần output, không qua bước xử lý tính toán gì) 
- số Kw điện đã sử dụng

 
 Khối 2: Các bước xử lý
 + Tạo UI
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Kết quả thi"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Kiểm tra xem các trường đã được nhập đầy đủ hay chưa, nếu chưa thì báo lỗi.
       - Lấy giá trị số Kw điện đã sử dụng từ ô input
       - Sử dụng if else để tính tiền điện theo các điều kiện
       if soKw>=0 && soKw <=50: soKw * 500
       else if soKw<=100: 50* 500 + (soKw-50) * 650
       else if soKw<=200: 50*500 + 50*650 + (soKw-100)*850
       else if soKw<=350: 50*500 + 50*650 + 100*850 + (soKw-200)*1100
       else if soKw>350: 50*500 + 50*650 + 100*850 + 150*1100 + (soKw-350)*1300
       else alert("Số tiền điện không hợp lệ")
      - in kết quả ra UI
      
 
 Khối 3: output
 - tiền điện
 */
document.getElementById("btnBai2").onclick = tinhTienDien;
function tinhTienDien() {
  // Kiểm tra xem các trường có được nhập đầy đủ hay chưa, nếu chưa thì thông báo lỗi
  if (
    document.getElementById("tenKH").value === "" ||
    document.getElementById("dienSuDung").value === ""
  ) {
    alert(
      "Vui lòng nhập đầy đủ và chính xác các trường bao gồm tên khách hàng và số điện đã sử dụng"
    );
    return;
  }
  //Lấy tên khách hàng
  var tenKh = document.getElementById("tenKH").value;
  //Lấy số Kw điện đã sử dụng
  var soKw = Number(document.getElementById("dienSuDung").value);
  // Tính tiền điện
  var tienDien = 0;
  if (soKw >= 0 && soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw >= 0 && soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw >= 0 && soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw >= 0 && soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  } else {
    alert("Số tiền điện không hợp lệ");
    return;
  }
  document.getElementById("ketQua2").innerHTML =
    "Khách hàng " +
    tenKh +
    " phải trả số tiền điện là " +
    tienDien.toLocaleString() +
    " VND";
}
