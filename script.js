// フィルタ表示
const buttons = document.querySelectorAll("button");
const list = document.querySelectorAll("li");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.id;

        list.forEach((li => {
            const id = li.dataset.id;

            if (filter === id) {
                li.style.display = "";
            } else {
                li.style.display = "none";
            }
        }));
    });
});

// ボタンをクリックしたら背景色を赤くする
const btns = document.querySelectorAll("button");


btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        // 全部リセット
        buttons.forEach(b => {
            b.style.backgroundColor = "";
            b.style.color = "";
        });

        // クリックしたやつだけ適用
        btn.style.backgroundColor = "#ED1A3D";
        btn.style.color = "#fff";
    });
});


// 車、電車のボタンをクリックするとURLパラメータを付与
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.dataset.id;

        const url = new URL(window.location);
        url.searchParams.set("id", id);
        
        history.pushState({}, "", url);
    });
});

    // ページ読み込み時にURLから復元
    const currentId = new URLSearchParams(location.search).get("id");

    document.querySelectorAll("[data-id]").forEach(button => {
        if (button.dataset.id === currentId) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });