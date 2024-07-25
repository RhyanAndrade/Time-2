function updateTimer() {
    const targetDate = new Date('2024-12-08T11:40:00');
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById('timer').textContent = '00:00:00:00';
        clearInterval(interval);
        alert('A data alvo foi alcançada!');
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = 
        `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}

const interval = setInterval(updateTimer, 1000);
updateTimer();
