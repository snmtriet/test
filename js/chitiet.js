var giohang = new Array();
function addcart(){
    var tensp = document.getElementById("tensp").innerText;
    var anh = document.getElementById("ProductImg").src;
    var giasp =document.getElementById("giasp").innerText;
    var mau =document.getElementById("mau").value;
    var sl =document.getElementById("sl").value;
    var item = new Array( anh,tensp, giasp, mau, sl);
    console.log(giohang);
    if(sessionStorage.getItem("giohang")){
        giohang=JSON.parse(sessionStorage.getItem("giohang"));
    }
    giohang.push(item);
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    window.location.href="Thanhtoan.html";
    
}

function showgiohangtrangtt(){
    var gh = sessionStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    var tong = 0;
    if(gh!=null){
    var kq=
    '<h2>ĐƠN HÀNG</h2>'+'<table style="border-collapse:collapse;" border="1">'+
        '<tr >'+
        '<th>STT</th>'+
        '<th>Hình</th>'+
        '<th>Tên sản phẩm</th>'+
        '<th>Đơn giá</th>'+
        '<th>Số lượng</th>'+
        '<th>Màu</th>'+
        '<th>Thành tiền</th>'
        '</tr>';
    for(let i=0; i<giohang.length; i++){
        let stt=i+1;
        let tt= giohang[i][2] * giohang[i][4];
        var kq;
        tong += tt;
        kq+=
        ' <tr style="text-align: center">'+
                '<td>' +stt+ '</td>'+
                '<td><img src="'+giohang[i][0]+'" style="height: 50px;width: 50px;"></td>'+
                '<td>' + giohang[i][1] + '</td>'+
                '<td>' + giohang[i][2] + '</td>'+
                '<td>' + giohang[i][4] + '</td>'+
                '<td>' + giohang[i][3] + '</td>'+
                '<td>' + tt + '</td>'+
                '</tr>';
    }
    kq+='<tr ">'+
            '<th colspan="6">Tổng Đơn Hàng</th>'+
            '<th>'+
            '<div>'+ tong +'</div>'+
            '</th>'+
            '</tr>'+
            '</table>';}
    else{
        kq='<div style="margin-left:20px;"><h1>Giỏ Hàng Đang Rỗng</h1></div>';
    }
    document.getElementById("showgiohang2").innerHTML=kq;

}