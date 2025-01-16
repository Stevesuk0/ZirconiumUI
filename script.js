function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function addItem() {
    // 这里可以添加你需要的逻辑
    closeModal();
}

function navigateToPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('navDrawer').classList.add('open');
});

document.getElementById('closeDrawerButton').addEventListener('click', function() {
    document.getElementById('navDrawer').classList.remove('open');
});

document.getElementById('openModalButton').addEventListener('click', openModal);
