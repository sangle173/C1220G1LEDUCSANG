function xacnhan() {
    let fName=document.getElementById('Fname').value;
    document.getElementById('hoTen').innerText=' Họ và tên: '+ fName;
    let soCMND=document.getElementById('CMND').value;
    document.getElementById('soCMND').innerText=' Số CMND : '+ soCMND;
    let ngaySinh=document.getElementById('birthday').value;
    document.getElementById('sinhNhat').innerText='Ngày sinh : '+ ngaySinh;
    let email=document.getElementById('email').value;
    document.getElementById('emailAdd').innerText='Email : '+ email;
    let address=document.getElementById('address').value;
    document.getElementById('diaChi').innerText='Địa chỉ : '+address;
    let loaiCustomer=document.getElementById('typeCustomer').value;
    document.getElementById('customer').innerText='Loai Customer : '+loaiCustomer;
    let giamGia=document.getElementById('sale').value;
    document.getElementById('giamGia').innerText='Giam gia : '+giamGia;
    let soLuong=document.getElementById('pax').value;
    document.getElementById('soLuong').innerText='Số luong : '+soLuong;
    let soNgayThue=document.getElementById('rentDays').value;
    document.getElementById('soNgayThue').innerText='Số ngày thuê : '+soNgayThue;
    let loaiDichVu=document.getElementById('typeService').value;
    document.getElementById('loaiDichVu').innerText='Loại dịch vụ: '+loaiDichVu;
    let phongThue=document.getElementById('typeRoom').value;
    document.getElementById('phongThue').innerText='Phòng thuê : '+phongThue;

}