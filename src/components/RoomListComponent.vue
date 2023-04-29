
<template>
    <body>
        <h1 style="text-align: center;">Co-Working Rooms</h1>
        <div class="container">
            <div class="card">
                <img src="https://via.placeholder.com/500x300.png?text=Room%201" alt="Room image">
                <h2>Room 1</h2>
                <p>Size: S</p>
                <p>Price: 100฿ ต่อชั่วโมง</p>
                <button class="create-reservation-btn" @click="showPopup = true">Create Reservation</button>
            </div>

            <div class="card">
                <img src="https://via.placeholder.com/500x300.png?text=Room%202" alt="Room image">
                <h2>Room 2</h2>
                <p>Size: M</p>
                <p>Price: 200฿ ต่อชั่วโมง</p>
                <button class="create-reservation-btn" @click="showPopup = true">Create Reservation</button>
            </div>

            <div class="card">
                <img src="https://via.placeholder.com/500x300.png?text=Room%203" alt="Room image">
                <h2>Room 3</h2>
                <p>Size: L</p>
                <p>Price: 200฿ ต่อชั่วโมง</p>
                <button class="create-reservation-btn" @click="showPopup = true">Create Reservation</button>
            </div>

        </div>
    </body>



    <div class="popup" v-if="showPopup">
        <div class="popup-content">
            <button class="close-button" @click="showPopup = false">X</button>

            <h2 class="form-title">Create a Reservation</h2>

            <form class="reservation-form" @submit.prevent="submitReservation">
                <div class="form-row">
                    <label for="checkin-date" class="form-label">Reserve Date:</label>
                    <input type="date" id="date" v-model="ReserveDate" class="form-input" required>
                </div>

                <div class="form-row">
                    <label for="checkin-time" class="form-label">Check-in Hour:</label>
                    <input type="number" id="checkin-time" v-model.number="checkinTime" class="form-input" min="0" max="23"
                        required>

                    <label for="checkout-time" class="form-label">Check-out Hour:</label>
                    <input type="number" id="checkout-time" v-model.number="checkoutTime" class="form-input" min="0"
                        max="23" required>
                </div>




                <div class="form-row">
                    <label class="form-label">Select Items:</label>
                    <div class="item-list">
                        <label v-for="item in itemList" :key="item.id" class="item-checkbox">
                            <input type="checkbox" v-model="selectedItems" :value="item.id">
                            {{ item.name }} + {{ item.price }}฿
                        </label>
                    </div>
                </div>

                <div class="form-row">
                    <label class="form-label">Select Caretaker:</label>
                    <div class="person-list">
                        <div v-for="person in personList" :key="person.id" class="person-radio">
                            <label>
                                <input type="radio" v-model="selectedPerson" :value="person.id">
                                <img :src="person.image" alt="person image" class="person-image">
                                {{ person.name }} + {{ person.price }}฿ 
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <label class="form-label">Total Price:</label>
                    <span class="total-price">{{ totalPrice }}$</span>
                </div>

                <div class="form-row">
                    <button type="submit" class="submit-btn">Submit</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPopup: false,
            ReserveDate: '',
            checkinTime: 0,
            checkoutTime: 0,
            selectedItems: [],
            selectedPerson: null,
            itemList: [
                { id: 1, name: 'Desk', price: 50 },
                { id: 2, name: 'Chair', price: 30 },
                { id: 3, name: 'Printer', price: 200 },
                { id: 4, name: 'Coffee', price: 45 },
            ],
            personList: [
                { id: 1, name: 'น้องเจน', image: 'https://via.placeholder.com/150' , price:1500},
                { id: 2, name: 'น้องจิ้บ', image: 'https://via.placeholder.com/150', price: 2000 },
                { id: 3, name: 'น้องจอย', image: 'https://via.placeholder.com/150', price: 2500 },
            ],
        };
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.itemList.forEach(item => {
                if (this.selectedItems.includes(item.id)) {
                    total += item.price;
                }
            });

            return total;
        },
    },
    methods: {
        submitReservation() {

            // Create date for checkin and checkout

            const checkinDate = new Date((new Date(this.ReserveDate)).setHours(this.checkinTime));
            const checkoutDate = new Date((new Date(this.ReserveDate)).setHours(this.checkoutTime));

            console.log(checkinDate + " " + checkoutDate)


            const reservationData = {
                check_in: checkinDate,
                check_out: checkoutDate,
                order: this.itemList.filter(item => this.selectedItems.includes(item.id)),
                caretaker: this.personList.find(person => person.id === this.selectedPerson),
            };

            // Here, you can send the reservationData to your backend server for processing

            // After successful submission, close the popup
            this.showPopup = false;

            // Reset the form data
            this.checkinDate = '';
            this.checkoutDate = '';
            this.selectedItems = [];
            this.selectedPerson = null;
        }
    },
};
</script>
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
    margin-top: 50px;
    font-size: 36px;
    font-weight: bold;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.card {
    width: 300px;
    height: 400px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
}

.card p {
    font-size: 16px;
    margin: 10px;
}

.card button {
    background-color: #0069d9;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
}

.card button:hover {
    background-color: #0056b3;
}

/* Popup container */
.popup {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

/* Popup content */
.popup-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    max-width: 800px;
    min-width: 400px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    position: relative;
}

/* Close button */
.close-button {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #aaa;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
}

/* Form title */
.form-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 0;
}

/* Form label */
.form-label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

/* Form input */
.form-input {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    font-size: 16px;
}

/* Item list */
.item-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
}

/* Item checkbox */
.item-checkbox {
    display: block;
    margin-right: 20px;
    font-size: 16px;
    cursor: pointer;
}

/* Person list */
.person-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
}

/* Person radio */
.person-radio {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 10px;
    cursor: pointer;
}

/* Person image */
.person-image {
    width: 100%;
    max-width: 100px;
    height: auto;
    margin-bottom: 5px;
    border-radius: 50%;
    object-fit: cover;
}

/* Total price */
.total-price {
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
}

/* Submit button */
.submit-btn {
    display: inline-block;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    margin-top: 20px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #3e8e41;
}

/* Close button */
.close-btn {
    display: inline-block;
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    margin-top: 20px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
</style>
