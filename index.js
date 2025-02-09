function atmWithdrawal(event) {
    event.preventDefault();
    let pin = parseInt(document.getElementById("pin").value);
    let balance = parseInt(document.getElementById("balance").value);
    let enterPin = parseInt(document.getElementById("enterpin").value);
    let amount = parseInt(document.getElementById("amount").value);
    let result = document.getElementById("withdraw");

    if (enterPin !== pin) {
        result.innerHTML = "❌ Incorrect PIN";
    } else if (amount > balance) {
        result.innerHTML = "❌ Insufficient balance";
    } else if (amount % 100 !== 0) {
        result.innerHTML = "❌ Amount must be a multiple of 100";
    } else {
        result.innerText = "✅ Withdrawal successful!";
    }
}

function calculateFinalAmount(event) {
    event.preventDefault();
    let orderAmount = parseFloat(document.getElementById("orders").value);
    let discount = orderAmount > 1000 ? 0.2 : orderAmount >= 500 ? 0.1 : 0;
    let shippingCharge = orderAmount >= 50 ? 0 : 10;
    let discountAmount = orderAmount * discount;
    let finalAmount = orderAmount - discountAmount + shippingCharge;
    document.getElementById("discountAmount").textContent = `$${discountAmount.toFixed(2)}`;
    document.getElementById("shippingCharge").textContent = `$${shippingCharge.toFixed(2)}`;
    document.getElementById("finalAmount").textContent = `$${finalAmount.toFixed(2)}`;
}

function calculateGrade(event) {
    event.preventDefault();
    let totalMarks = parseFloat(document.getElementById("marks").value);
    let totalAttendance = parseFloat(document.getElementById("attendance").value);
    let grade;
    if (totalAttendance > 90) totalMarks += 5;
    grade = totalMarks >= 90 ? "A" : totalMarks >= 80 ? "B" : totalMarks >= 70 ? "C" : totalMarks >= 60 ? "D" : "F";
    document.getElementById("grade").innerHTML = `Grade: ${grade}`;
}

function trafficLightControl() {
    let density = document.getElementById("density").value;
    document.getElementById("trafficSignal").textContent = density === "Heavy Traffic" ? "Green for 60 sec" :
        density === "Moderate Traffic" ? "Green for 40 sec" : "Green for 20 sec";
}

function calculateTicketPrice(event) {
    event.preventDefault();
    let standardPrice = 12;
    let discount = 0;
    let yourAge = parseInt(document.getElementById("ages").value);
    let hour = parseInt(document.getElementById("time").value.split(":"));
    if (yourAge >= 60) discount = 0.3;
    else if (yourAge <= 12) discount = 0.4;
    if (hour < 17) discount += 0.2;
    let finalPrice = standardPrice * (1 - discount);
    document.getElementById("final").textContent = finalPrice.toFixed(2);
}
function isEligibleForJob(event) {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    let experience = parseInt(document.getElementById("experience").value);
    let qualification = document.getElementById("study").value;
    let result = document.getElementById("eligible");
    
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        result.textContent = "✅ You are eligible for the job.";
    } else {
        result.textContent = "❌ You are not eligible for the job.";
    }
}

function applyCoupon(event) {
    event.preventDefault();
    let orderAmount = parseFloat(document.getElementById("totalOrder").value);
    let couponCode = document.getElementById("coupons").value;
    let totalAmount = document.getElementById("cart");
    
    if (orderAmount >= 500 && couponCode === "DISCOUNT10") {
        orderAmount *= 0.9;
    } else if (orderAmount >= 200 && couponCode === "FREESHIP") {
        orderAmount -= 10;
    } else {
        alert("Coupon not applicable.");
    }
    totalAmount.textContent = `Total Amount: $${orderAmount.toFixed(2)}`;
}

function choosePlan(event) {
    event.preventDefault();
    let planType = document.getElementById("plan").value;
    let wantsTrainer = document.getElementById("trainer").checked;
    let wantsDietPlan = document.getElementById("diet").checked;
    let finalPlan = document.getElementById("finalPlan");
    
    if (planType === "VIP" || (planType === "Premium" && wantsTrainer) || (planType === "Basic" && wantsTrainer)) {
        finalPlan.textContent = "Recommended Plan: VIP ($80/month) - Gym + Trainer + Diet Plan";
    } else if (planType === "Premium" || (planType === "Basic" && wantsTrainer)) {
        finalPlan.textContent = "Recommended Plan: Premium ($50/month) - Gym + Trainer";
    } else {
        finalPlan.textContent = "Recommended Plan: Basic ($20/month) - Gym Access";
    }
}

function calculateElectricityBill(event) {
    event.preventDefault();
    let units = parseInt(document.getElementById("unit").value);
    let time = document.getElementById("Time").value;
    let hour = parseInt(time.split(":"));
    let charge = units <= 100 ? units * 5 : units <= 300 ? (100 * 5) + ((units - 100) * 4) : (100 * 5) + (200 * 4) + ((units - 300) * 3);
    if (hour >= 20 || hour < 8) charge *= 1.1;
    document.getElementById("calculate").textContent = `$${charge.toFixed(2)}`;
}

function calculateFlightFare(event) {
    event.preventDefault();
    let baseFare = 300;
    let extraCharge = 0;
    let selectedClass = document.getElementById("class").value;
    let age = parseInt(document.getElementById("yourAge").value);
    let luggage = parseInt(document.getElementById("luggage").value);
    let isStudent = document.getElementById("student").checked;
    
    if (selectedClass === "Business") extraCharge += 200;
    if (selectedClass === "First") extraCharge += 500;
    if (luggage > 20) extraCharge += Math.ceil((luggage - 20) / 10) * 50;
    
    let finalPrice = baseFare + extraCharge;
    if (isStudent) finalPrice *= 0.85;
    else if (age > 60) finalPrice *= 0.9;
    
    document.getElementById("finalPrice").textContent = `Total Fare: $${finalPrice.toFixed(2)}`;
}