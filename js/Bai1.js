/**
 Khối 1: input
- điểm môn 1, môn 2, môn 3
- điểm chuẩn
- khu vực, đối tượng

 
 Khối 2: Các bước xử lý
 + Tạo UI
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Kết quả thi"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Kiểm tra xem các trường đã được nhập đầy đủ hay chưa, nếu chưa thì báo lỗi.
       - Lấy giá trị điểm 3 môn từ các ô input
       - Lấy giá trị điểm chuẩn từ ô "điểm chuẩn"
       - Lấy giá trị được nhập vào từ ô "khu vực" và "đối tượng"
       - Với trường "Khu vực", sử dụng if/else để chuyển từ giá trị được nhập vào để cho ra giá trị điểm cộng tương ứng (Khu vực A được cộng 2 điểm, B được 1 điểm, C được 0.5 điểm, X là 0 điểm, ngoài ra còn trường hợp nhập sai thì báo lỗi)
       - Với trường "Đối tượng", sử dụng if/else để để chuyển từ giá trị được nhập vào để cho ra giá trị điểm cộng tương ứng (Đối tượng 1 được 2.5 điểm, 2 được 1.5 điểm, 3 được 1 điểm, 0 là 0 điểm, ngoài ra còn trường hợp nhập sai thì báo lỗi)
       - Tính tổng điểm (đã bao gồm điểm ưu tiêm)diemTong = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong
       - Sử dụng if/else để kiểm tra xem nếu điểm 1 trong 3 môn là 0 điểm thì bị đánh rớt (nhưng vẫn cho biết tổng điểm)
       - Sử dụng if/else để xem nếu điểm tổng >= điểm chuẩn thì thông báo đậu, nếu else thì rớt.
       - Hiển thị kết quả lên UI
 
 Khối 3: output
 - tổng điểm 3 môn
 - tổng điểm (đã bao gồm điểm công khu vực và đối tượng)
 - kết quả (đậu hay rớt)
 */

document.getElementById("btnBai1").onclick = ketQuaThi;
function ketQuaThi() {
  // Kiểm tra xem các trường có được nhập đầy đủ hay chưa, nếu chưa thì thông báo lỗi
  if (
    document.getElementById("mon1").value === "" ||
    document.getElementById("mon2").value === "" ||
    document.getElementById("mon3").value === "" ||
    document.getElementById("diemChuan").value === "" ||
    document.getElementById("khuVuc").value === "" ||
    document.getElementById("doiTuong").value === ""
  ) {
    alert("Vui lòng nhập đầy đủ và chính xác các trường!");
    return;
  }
  // Lấy giá trị được nhập vào từ các trườnng
  var diemMon1 = Number(document.getElementById("mon1").value);
  var diemMon2 = Number(document.getElementById("mon2").value);
  var diemMon3 = Number(document.getElementById("mon3").value);
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = Number(document.getElementById("doiTuong").value);

  // Lấy điểm cộng tương ứng với từng giá trị được input từ trường "Khu vực"
  var diemKhuVuc = 0;
  if (khuVuc === "A") {
    diemKhuVuc = 2;
  } else if (khuVuc === "B") {
    diemKhuVuc = 1;
  } else if (khuVuc === "C") {
    diemKhuVuc = 0.5;
  } else if (khuVuc === "X") {
    diemKhuVuc = 0;
  } else {
    alert("Khu vực không hợp lệ! Vui lòng nhập A, B, C hoặc X.");
    return;
  }
  // Lấy điểm cộng tương ứng với từng giá trị được input từ trường "Đối tượng"
  var diemDoiTuong = 0;
  if (doiTuong === 1) {
    diemDoiTuong = 2.5;
  } else if (doiTuong === 2) {
    diemDoiTuong = 1.5;
  } else if (doiTuong === 3) {
    diemDoiTuong = 1;
  } else if (doiTuong === 0) {
    diemDoiTuong = 0;
  } else {
    alert("Đối tượng không hợp lệ! Vui lòng nhập 0, 1, 2 hoặc 3.");
    return;
  }

  // Tính tổng điểm
  diemTong = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

  // Kiểm tra nếu có môn nào điểm 0 thì không đậu
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    document.getElementById("ketQua1").innerHTML =
      "Thí sinh đã rớt vì có môn bị 0 điểm. Tổng điểm của thí sinh là " +
      diemTong;
    return;
  }
  // Kiểm tra nếu tổng điểm lớn hơn điểm chuẩn thì đậu, ngược lại rớt
  if (diemTong >= diemChuan) {
    document.getElementById("ketQua1").innerHTML =
      "Thí sinh đã đậu. Tổng điểm của thí sinh là " + diemTong;
  } else {
    document.getElementById("ketQua1").innerHTML =
      "Thí sinh đã rớt. Tổng điểm của thí sinh là " + diemTong;
  }
}
