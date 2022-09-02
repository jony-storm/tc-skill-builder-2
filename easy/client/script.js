window.onload = () => {
    const show = document.getElementById("show"),
        year = document.getElementById("year"),
        month = document.getElementById("month"),
        day = document.getElementById("day"),
        hour = document.getElementById("hour"),
        min = document.getElementById("minute"),
        sec = document.getElementById("second");

    function show_date_time() {
        const now = new Date();
        year.innerText = now.getFullYear();
        month.innerText = (now.getMonth() + 1).toString().padStart(2, "0");
        day.innerText = now.getDate().toString().padStart(2, "0");
        hour.innerText = now.getHours().toString().padStart(2, "0");
        min.innerText = now.getMinutes().toString().padStart(2, "0");
        sec.innerText = now.getSeconds().toString().padStart(2, "0");
        show.style.display = "flex";
    }

    setInterval(show_date_time, 1000);
}
