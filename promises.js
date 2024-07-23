document.addEventListener('DOMContentLoaded', () => {
    const taskDropdown = document.getElementById('taskDropdown');
    const resultDiv = document.getElementById('result');

    taskDropdown.addEventListener('change', () => {
        const selectedTask = taskDropdown.value;
        resultDiv.innerHTML = '';

        handleTask(selectedTask)
            .then(message => {
                resultDiv.innerHTML = `<p style="color: green;">${message}</p>`;
            })
            .catch(error => {
                resultDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
            });
    });

    function handleTask(task) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const reasons = {
                    orderCake: [
                        'Delivery is not available in your area.',
                        'The bakery is out of stock.',
                        'Invalid payment method.'
                    ],
                    stitchDress: [
                        'Tailor is not available.',
                        'Fabric is out of stock.',
                        'Invalid measurements provided.'
                    ],
                    callGuests: [
                        'Guest list is not provided.',
                        'Phone lines are down.',
                        'Invalid contact information.'
                    ]
                };

                if (reasons[task]) {
                    const canDeliver = Math.random() > 0.5;
                    
                    if (canDeliver) {
                        const deliveryTimes = {
                            orderCake: '2 hours',
                            stitchDress: '3 days',
                            callGuests: '1 hour'
                        };
                        resolve(`Your ${task.replace(/([A-Z])/g, ' $1').toLowerCase()} will be delivered in ${deliveryTimes[task]}.`);
                    } else {
                        const randomIndex = Math.floor(Math.random() * reasons[task].length);
                        const reason = reasons[task][randomIndex];
                        reject(reason);
                    }
                } else {
                    resolve('successfully.');
                }
            }, 2000);
        });
    }
});