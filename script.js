const buttons = document.querySelectorAll("button");
const list = document.querySelectorAll("li");

function setActiveButton(id) {
    buttons.forEach(button => {
        if (button.dataset.id === id) {
            button.style.backgroundColor = "#ED1A3D";
            button.style.color = "#fff";
        } else {
            button.style.backgroundColor = "";
            button.style.color = "";
        }
    });
}

function filterList(id) {
    list.forEach(li => {
        if (li.dataset.id === id) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
}

// ページ読み込み時
const currentId = new URLSearchParams(location.search).get("id");

if (currentId) {
    setActiveButton(currentId);
    filterList(currentId);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.id;

        // フィルタ
        filterList(id);

        // ボタン色
        setActiveButton(id);

        // URL更新
        const url = new URL(location);
        url.searchParams.set("id", id);
        history.pushState({}, "", url);
    });
});