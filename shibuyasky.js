javascript:(async function() {
    async function waitFor(selector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const start = Date.now();
            const check = () => {
                const el = document.querySelector(selector);
                if (el) return resolve(el);
                if (Date.now() - start >= timeout) return reject("Timeout waiting for " + selector);
                requestAnimationFrame(check);
            };
            check();
        });
    };

    //define target date
    const date = "20251205";
    //define entry time to aim (if current one is already full, it checks the next time slot)
    const minTime = 1600;
    // define the person name here
    const person = [
        "person 1",
        "person 2"
    ];
    const personCount = person.length;

    document.getElementById(date).click();

    const timeSlots = await waitFor(".times24");
    const availableTimes = timeSlots.querySelectorAll(".safe");

    for (let i = 0; i < availableTimes.length; i++) {
        const timeSlot = availableTimes[i];
        const hour = parseInt(timeSlot.id.substring(0,2) + timeSlot.id.substring(3,5));
        if (hour >= minTime) {
            console.log("got timeslot at " + timeSlot.id);
            timeSlot.click();
            break;
        }
    }

    const incrementButton = await waitFor(".setBtn");
    
    for (let i = 0; i < personCount; i++) {
        incrementButton.click();
    }

    const detailButtons = await waitFor(".YPview");
    detailButtons.click();

    const nameFields = await waitFor('input[name="fieldValue"]');
    document.querySelector('#contractAgreeFlag').checked = true;

    for (let i = 0; i < personCount; i++) {
        nameFields.value = person[i];
        document.querySelector(".ctrlBtnS2.YPchangeNext").click();
    }

    document.querySelector('.ctrlBtnS2.YPchange').click();

    const checkoutButton = await waitFor('#cartInBtnSkip:not([style*="display:none"])');
    checkoutButton.click();

})();