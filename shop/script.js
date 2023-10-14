function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflakes";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(snowflake);

    snowflake.addEventListener("animationiteration", () => {
        snowflake.style.left = Math.random() * window.innerWidth + "px";
    });

    snowflake.addEventListener("animationend", () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 500);
