window.onload = function () {
    try {
        var url_string = (window.location.href);
        var url = new URL(url_string);
        var nama = url.searchParams.get("nama");
        var alamat = url.searchParams.get("alamat");
        // console.log(url.search);

        var tujuan = nama + " (" + alamat + ")";


        document.getElementById("tujuan-isi").innerHTML = tujuan;

    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}
