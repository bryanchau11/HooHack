<button onclick = "sweet()" type="button" class = "qrbutton"> try </button>
<script>
function sweet(){  
    Swal.fire({
    title: 'Here is your qrcode',
    imageUrl: 'QR.svg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'QR CODE',
    })
}
</script>  