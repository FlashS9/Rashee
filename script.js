document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const targetId = 'p-' + input.id;
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.innerText = input.value;
            }
        });
    });
});