javascript:(async function() {
    const ccno = "1234567890123456";
    const ccmonth = "01";
    const ccyear = "2026";
    const cccvv = "111";
    const ccname = "person name";
    const phone = "0812345678";

    document.getElementById("cardNo").value = ccno;
    document.getElementById("monthSelect").value = ccmonth;
    document.getElementById("yearSelect").value = ccyear;
    document.getElementById("securityCode").value = cccvv;
    document.getElementById("holder").value = ccname;
    document.getElementById("holderTelNo").value = phone;

    document.getElementById("detailConfBtn").click();
})();