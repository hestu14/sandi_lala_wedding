window.onload = function () {
    try {
        var url_string = (window.location.href);
        var url = new URL(url_string);
        var nama = url.searchParams.get("nama");
        var alamat = url.searchParams.get("alamat");

        var tujuan;
        if (nama = "null") {
            // tujuan = "............";
            $( "#tujuan-isi" ).hide();
        } else if ( alamat = "null") {
            // tujuan = "............";
            $( "#tujuan-isi" ).hide();
        } else {
            tujuan = nama + " (" + alamat + ")";
        }

        document.getElementById("tujuan-isi").innerHTML = tujuan;

    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}