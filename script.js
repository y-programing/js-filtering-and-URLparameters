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