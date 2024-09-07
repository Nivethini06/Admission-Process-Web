/*const appnoInput = document.getElementById('appno');
const appnoError = document.getElementById('appno-error');

// Add an event listener for input change
appnoInput.addEventListener('input', function() {
    // Validate if the input is empty or not a number
    if (!appnoInput.value.trim()) {
        appnoError.textContent = 'Please enter your application number.';
    } else if (isNaN(appnoInput.value.trim())) {
        appnoError.textContent = 'Please enter a valid number.';
    } else {
        appnoError.textContent = ''; // Clear error message if input is valid
    }
});

// Get the input element and error message element
const admnoInput = document.getElementById('admno');
const admnoError = document.getElementById('admno-error');

// Add an event listener for input change
admnoInput.addEventListener('input', function() {
    // Validate if the input is empty
    if (!admnoInput.value.trim()) {
        admnoError.textContent = 'Please enter your admission number.';
    } else {
        admnoError.textContent = ''; // Clear error message if input is valid
    }
});

// Get the input elements and error message elements
const nameInput = document.getElementById('name');
const fnameInput = document.getElementById('fname');
const nameError = document.getElementById('name-error');
const fnameError = document.getElementById('fname-error');

// Add event listeners for input change
nameInput.addEventListener('input', validateName);
fnameInput.addEventListener('input', validateFName);

function validateName() {
    // Validate if the input is empty
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter the name of the student.';
    } else {
        nameError.textContent = ''; // Clear error message if input is valid
    }
}

function validateFName() {
    // Validate if the input is empty
    if (!fnameInput.value.trim()) {
        fnameError.textContent = 'Please enter the name of the father.';
    } else {
        fnameError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the input elements and error message elements
const occInput = document.getElementById('occ');
const aincInput = document.getElementById('ainc');
const occError = document.getElementById('occ-error');
const aincError = document.getElementById('ainc-error');

// Add event listeners for input change
occInput.addEventListener('input', validateOcc);
aincInput.addEventListener('input', validateAinc);

function validateOcc() {
    // Validate if the input is empty
    if (!occInput.value.trim()) {
        occError.textContent = 'Please enter the occupation.';
    } else {
        occError.textContent = ''; // Clear error message if input is valid
    }
}

function validateAinc() {
    // Validate if the input is empty
    if (!aincInput.value.trim()) {
        aincError.textContent = 'Please enter the annual income.';
    } else if (isNaN(aincInput.value.trim())) {
        aincError.textContent = 'Please enter a valid number for annual income.';
    } else {
        aincError.textContent = ''; // Clear error message if input is valid
    }
}
// Get the input element and error message element for Mother's name
const mnameInput = document.getElementById('mname');
const mnameError = document.getElementById('mname-error');

// Add event listener for input change
mnameInput.addEventListener('input', validateMname);

function validateMname() {
    // Validate if the input is empty
    if (!mnameInput.value.trim()) {
        mnameError.textContent = 'Please enter the name of the mother.';
    } else {
        mnameError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the input element and error message element for Address and Pin code
const addressInput = document.getElementById('add');
const pincodeError = document.getElementById('pincode-error');

// Add event listener for input change
addressInput.addEventListener('input', validatePincode);

function validatePincode() {
    // Regular expression to match 6-digit pin code
    const pincodePattern = /^\d{6}$/;

    // Extract pin code from the address input
    const address = addressInput.value.trim();
    const pincode = address.slice(-6); // Assuming pin code is at the end of the address

    // Validate if the pin code is provided and matches the pattern
    if (!pincode) {
        pincodeError.textContent = 'Please enter the pin code.';
    } else if (!pincodePattern.test(pincode)) {
        pincodeError.textContent = 'Please enter a valid 6-digit pin code.';
    } else {
        pincodeError.textContent = ''; // Clear error message if input is valid
    }
}


// Get the radio button elements and error message element for Gender
const maleRadio = document.getElementById('male');
const femaleRadio = document.getElementById('female');
const otherRadio = document.getElementById('other');
const genderError = document.getElementById('gender-error');

// Add event listener for radio button change
maleRadio.addEventListener('change', validateGender);
femaleRadio.addEventListener('change', validateGender);
otherRadio.addEventListener('change', validateGender);

function validateGender() {
    // Check if any of the radio buttons is checked
    if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
        genderError.textContent = 'Please select a gender.';
    } else {
        genderError.textContent = ''; // Clear error message if a gender is selected
    }
}

// Get the input element and error message element for Date of Birth
const dobInput = document.getElementById('dob');
const dobError = document.getElementById('dob-error');

// Add event listener for input change
dobInput.addEventListener('input', validateDob);

function validateDob() {
    // Validate if the input is empty
    if (!dobInput.value) {
        dobError.textContent = 'Please enter your date of birth.';
    } else {
        dobError.textContent = ''; // Clear error message if input is valid
    }
}
// Get the input element and error message element for Nationality
const natInput = document.getElementById('nat');
const natError = document.getElementById('nat-error');

// Add event listener for input change
natInput.addEventListener('input', validateNat);

function validateNat() {
    // Validate if the input is empty
    if (!natInput.value.trim()) {
        natError.textContent = 'Please enter your nationality.';
    } else {
        natError.textContent = ''; // Clear error message if input is valid
    }
}


// Get the input element and error message element for Religion
const relInput = document.getElementById('rel');
const relError = document.getElementById('rel-error');

// Add event listener for input change
relInput.addEventListener('input', validateRel);

function validateRel() {
    // Validate if the input is empty
    if (!relInput.value.trim()) {
        relError.textContent = 'Please enter your religion.';
    } else {
        relError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the select element and error message element for Community
const communitySelect = document.getElementById('community');
const communityError = document.getElementById('community-error');

// Add event listener for input change
communitySelect.addEventListener('change', validateCommunity);

function validateCommunity() {
    // Validate if the selected value is empty
    if (!communitySelect.value) {
        communityError.textContent = 'Please select your community.';
    } else {
        communityError.textContent = ''; // Clear error message if input is valid
    }
}
// Get the input elements and error message elements for Name of the Caste and Native District
const comInput = document.getElementById('com');
const comError = document.getElementById('com-error');
const ndInput = document.getElementById('nd');
const ndError = document.getElementById('nd-error');

// Add event listeners for input change
comInput.addEventListener('input', validateCom);
ndInput.addEventListener('input', validateNd);

function validateCom() {
    // Validate if the input is empty
    if (!comInput.value.trim()) {
        comError.textContent = 'Please enter the name of the caste.';
    } else {
        comError.textContent = ''; // Clear error message if input is valid
    }
}

function validateNd() {
    // Validate if the input is empty
    if (!ndInput.value.trim()) {
        ndError.textContent = 'Please enter the native district.';
    } else {
        ndError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the input elements and error message elements for Community Certificate Particulars
const ioInput = document.getElementById('io');
const ioError = document.getElementById('io-error');
const iorInput = document.getElementById('ior');
const iorError = document.getElementById('ior-error');
const inameInput = document.getElementById('iname');
const inameError = document.getElementById('iname-error');
const miInput = document.getElementById('mi');
const miError = document.getElementById('mi-error');

// Add event listeners for input change
ioInput.addEventListener('input', validateIo);
iorInput.addEventListener('input', validateIor);
inameInput.addEventListener('input', validateIname);
miInput.addEventListener('input', validateMi);

function validateIo() {
    // Validate if the input is empty
    if (!ioInput.value.trim()) {
        ioError.textContent = 'Please enter the issuing office.';
    } else {
        ioError.textContent = ''; // Clear error message if input is valid
    }
}

function validateIor() {
    // Validate if the input is empty
    if (!iorInput.value.trim()) {
        iorError.textContent = 'Please enter the issuing officer designation.';
    } else {
        iorError.textContent = ''; // Clear error message if input is valid
    }
}

function validateIname() {
    // Validate if the input is empty
    if (!inameInput.value.trim()) {
        inameError.textContent = 'Please enter the name of the institution last studied.';
    } else {
        inameError.textContent = ''; // Clear error message if input is valid
    }
}

function validateMi() {
    // Validate if the input is empty
    if (!miInput.value.trim()) {
        miError.textContent = 'Please enter the medium of institution.';
    } else {
        miError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the input elements and error message elements for Board of Examination, TC number, and TC Date
const beInput = document.getElementById('be');
const beError = document.getElementById('be-error');
const tcInput = document.getElementById('tc');
const tcError = document.getElementById('tc-error');
const tcdInput = document.getElementById('tcd');
const tcdError = document.getElementById('tcd-error');

// Add event listeners for input change
beInput.addEventListener('input', validateBe);
tcInput.addEventListener('input', validateTc);
tcdInput.addEventListener('input', validateTcd);

function validateBe() {
    // Validate if the input is empty
    if (!beInput.value.trim()) {
        beError.textContent = 'Please enter the board of examination.';
    } else {
        beError.textContent = ''; // Clear error message if input is valid
    }
}

function validateTc() {
    // Validate if the input is empty
    if (!tcInput.value.trim()) {
        tcError.textContent = 'Please enter the TC number.';
    } else {
        tcError.textContent = ''; // Clear error message if input is valid
    }
}

function validateTcd() {
    // Validate if the input is empty
    if (!tcdInput.value.trim()) {
        tcdError.textContent = 'Please select the TC date.';
    } else {
        tcdError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the input element and error message element for Mobile Number
const mobileInput = document.getElementById('mobile');
const mobileError = document.getElementById('mobile-error');

// Add event listener for input change
mobileInput.addEventListener('input', validateMobile);

function validateMobile() {
    // Validate if the input is empty
    if (!mobileInput.value.trim()) {
        mobileError.textContent = 'Please enter your mobile number.';
    } else if (!/^\d{10}$/.test(mobileInput.value.trim())) {
        mobileError.textContent = 'Mobile number must be exactly 10 digits.';
    } else {
        mobileError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the input elements and error message elements
const aadharInput = document.getElementById('aadhar');
const cutoffInput = document.getElementById('plus_two_cutoff');
const overallRankInput = document.getElementById('overall_rank');
const communityRankInput = document.getElementById('community_rank');

const aadharError = document.getElementById('aadhar-error');
const cutoffError = document.getElementById('cutoff-error');
const overallRankError = document.getElementById('overall-rank-error');
const communityRankError = document.getElementById('community-rank-error');

// Add event listeners for input change
aadharInput.addEventListener('input', validateAadhar);
cutoffInput.addEventListener('input', validateCutoff);
overallRankInput.addEventListener('input', validateOverallRank);
communityRankInput.addEventListener('input', validateCommunityRank);

function validateAadhar() {
    // Validate if the input is empty
    if (!aadharInput.value.trim()) {
        aadharError.textContent = 'Please enter your Aadhar number.';
    } else if (!/^\d{12}$/.test(aadharInput.value.trim())) {
        aadharError.textContent = 'Aadhar number must be exactly 12 digits.';
    } else {
        aadharError.textContent = ''; // Clear error message if input is valid
    }
}

function validateCutoff() {
    // Validate if the input is empty
    if (!cutoffInput.value.trim()) {
        cutoffError.textContent = 'Please enter your Plus Two cutoff marks.';
    } else {
        cutoffError.textContent = ''; // Clear error message if input is valid
    }
}

function validateOverallRank() {
    // Validate if the input is empty
    if (!overallRankInput.value.trim()) {
        overallRankError.textContent = 'Please enter your overall rank.';
    } else {
        overallRankError.textContent = ''; // Clear error message if input is valid
    }
}

function validateCommunityRank() {
    // Validate if the input is empty
    if (!communityRankInput.value.trim()) {
        communityRankError.textContent = 'Please enter your community rank.';
    } else {
        communityRankError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the input element and error message element for Admission Date
const admissionDateInput = document.getElementById('admission_date');
const admissionDateError = document.getElementById('admission-date-error');

// Add event listener for input change
admissionDateInput.addEventListener('input', validateAdmissionDate);

function validateAdmissionDate() {
    // Validate if the input is empty
    if (!admissionDateInput.value.trim()) {
        admissionDateError.textContent = 'Please enter the admission date.';
    } else {
        admissionDateError.textContent = ''; // Clear error message if input is valid
    }
}

// Get the input elements for marks obtained in each subject
const mathMarksInput = document.getElementsByName('marks_obtained_math')[0];
const phyMarksInput = document.getElementsByName('marks_obtained_phy')[0];
const chemMarksInput = document.getElementsByName('marks_obtained_chem')[0];

// Get the error message elements for each subject
const mathMarksError = document.getElementById('math-marks-error');
const phyMarksError = document.getElementById('phy-marks-error');
const chemMarksError = document.getElementById('chem-marks-error');

// Add event listeners for input change in each subject's marks
mathMarksInput.addEventListener('input', validateMathMarks);
phyMarksInput.addEventListener('input', validatePhyMarks);
chemMarksInput.addEventListener('input', validateChemMarks);

// Function to validate marks obtained in Maths
function validateMathMarks() {
    // Validate if the input is empty or not a number
    if (!mathMarksInput.value.trim()) {
        mathMarksError.textContent = 'Please enter marks obtained in Maths.';
    } else if (isNaN(mathMarksInput.value.trim())) {
        mathMarksError.textContent = 'Marks obtained must be a number.';
    } else {
        mathMarksError.textContent = ''; // Clear error message if input is valid
    }
}

// Function to validate marks obtained in Physics
function validatePhyMarks() {
    // Validate if the input is empty or not a number
    if (!phyMarksInput.value.trim()) {
        phyMarksError.textContent = 'Please enter marks obtained in Physics.';
    } else if (isNaN(phyMarksInput.value.trim())) {
        phyMarksError.textContent = 'Marks obtained must be a number.';
    } else {
        phyMarksError.textContent = ''; // Clear error message if input is valid
    }
}

// Function to validate marks obtained in Chemistry
function validateChemMarks() {
    // Validate if the input is empty or not a number
    if (!chemMarksInput.value.trim()) {
        chemMarksError.textContent = 'Please enter marks obtained in Chemistry.';
    } else if (isNaN(chemMarksInput.value.trim())) {
        chemMarksError.textContent = 'Marks obtained must be a number.';
    } else {
        chemMarksError.textContent = ''; // Clear error message if input is valid
    }
}*/

function validateForm() {
    // Application No validation
    var appno = document.getElementById('appno').value.trim();
    if (appno === '') {
        document.getElementById('appno-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('appno-error').innerText = ''; // Clear error message
    }

    // Admission No validation
    var admno = document.getElementById('admno').value.trim();
    if (admno === '') {
        document.getElementById('admno-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('admno-error').innerText = ''; // Clear error message
    }

    // Name validation
    var name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('name-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('name-error').innerText = ''; // Clear error message
    }

    // Father's Name validation
    var fname = document.getElementById('fname').value.trim();
    if (fname === '') {
        document.getElementById('fname-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('fname-error').innerText = ''; // Clear error message
    }

    // Father's Occupation validation
    var occ = document.getElementById('occ').value.trim();
    if (occ === '') {
        document.getElementById('occ-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('occ-error').innerText = ''; // Clear error message
    }

    // Annual Income validation
    var ainc = document.getElementById('ainc').value.trim();
    if (ainc === '') {
        document.getElementById('ainc-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('ainc-error').innerText = ''; // Clear error message
    }

    // Mother's Name validation
    var mname = document.getElementById('mname').value.trim();
    if (mname === '') {
        document.getElementById('mname-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('mname-error').innerText = ''; // Clear error message
    }

    // Address validation
    var address = document.getElementById('add').value.trim();
    if (address === '') {
        document.getElementById('pincode-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('pincode-error').innerText = ''; // Clear error message
    }

    // Gender validation
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('gender-error').innerText = 'Please select a gender';
        return false;
    } else {
        document.getElementById('gender-error').innerText = ''; // Clear error message
    }

    // Date of Birth validation
    var dob = document.getElementById('dob').value.trim();
    if (dob === '') {
        document.getElementById('dob-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('dob-error').innerText = ''; // Clear error message
    }

    // Nationality validation
    var nationality = document.getElementById('nat').value.trim();
    if (nationality === '') {
        document.getElementById('nat-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('nat-error').innerText = ''; // Clear error message
    }

    // Religion validation
    var religion = document.getElementById('rel').value.trim();
    if (religion === '') {
        document.getElementById('rel-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('rel-error').innerText = ''; // Clear error message
    }

    // Community validation
    var community = document.getElementById('community').value;
    if (community === '') {
        document.getElementById('community-error').innerText = 'Please select a community';
        return false;
    } else {
        document.getElementById('community-error').innerText = ''; // Clear error message
    }

    // Name of the Caste validation
    var com = document.getElementById('com').value.trim();
    if (com === '') {
        document.getElementById('com-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('com-error').innerText = ''; // Clear error message
    }

    // Native District validation
    var nd = document.getElementById('nd').value.trim();
    if (nd === '') {
        document.getElementById('nd-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('nd-error').innerText = ''; // Clear error message
    }

    // Issuing Office validation
    var io = document.getElementById('io').value.trim();
    if (io === '') {
        document.getElementById('io-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('io-error').innerText = ''; // Clear error message
    }

    // Issuing Officer (Designation) validation
    var ior = document.getElementById('ior').value.trim();
    if (ior === '') {
        document.getElementById('ior-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('ior-error').innerText = ''; // Clear error message
    }

    // Institution last Studied validation
    var iname = document.getElementById('iname').value.trim();
    if (iname === '') {
        document.getElementById('iname-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('iname-error').innerText = ''; // Clear error message
    }

    // Medium of Institution validation
    var mi = document.getElementById('mi').value.trim();
    if (mi === '') {
        document.getElementById('mi-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('mi-error').innerText = ''; // Clear error message
    }

    // Board of Examination validation
    var be = document.getElementById('be').value.trim();
    if (be === '') {
        document.getElementById('be-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('be-error').innerText = ''; // Clear error message
    }

    // TC number validation
    var tc = document.getElementById('tc').value.trim();
    if (tc === '') {
        document.getElementById('tc-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('tc-error').innerText = ''; // Clear error message
    }

    // TC Date validation
    var tcd = document.getElementById('tcd').value.trim();
    if (tcd === '') {
        document.getElementById('tcd-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('tcd-error').innerText = ''; // Clear error message
    }

    // Mobile Number validation
    var mobile = document.getElementById('mobile').value.trim();
    if (mobile === '') {
        document.getElementById('mobile-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('mobile-error').innerText = ''; // Clear error message
    }

    // Aadhar Number validation
    var aadhar = document.getElementById('aadhar').value.trim();
    if (aadhar === '') {
        document.getElementById('aadhar-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('aadhar-error').innerText = ''; // Clear error message
    }

    // +2 Cutoff validation
    var plusTwoCutoff = document.getElementById('plus_two_cutoff').value.trim();
    if (plusTwoCutoff === '') {
        document.getElementById('cutoff-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('cutoff-error').innerText = ''; // Clear error message
    }

    // Overall Rank validation
    var overallRank = document.getElementById('overall_rank').value.trim();
    if (overallRank === '') {
        document.getElementById('overall-rank-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('overall-rank-error').innerText = ''; // Clear error message
    }

    // Community Rank validation
    var communityRank = document.getElementById('community_rank').value.trim();
    if (communityRank === '') {
        document.getElementById('community-rank-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('community-rank-error').innerText = ''; // Clear error message
    }

    // Admission Date validation
    var admissionDate = document.getElementById('admission_date').value.trim();
    if (admissionDate === '') {
        document.getElementById('admission-date-error').innerText = 'Please fill the details';
        return false;
    } else {
        document.getElementById('admission-date-error').innerText = ''; // Clear error message
    }

    // Confirmation validation
    var confirmation = document.getElementById('confirmation').checked;
    if (!confirmation) {
        alert('Please confirm that all information provided is correct.');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitAndNavigateBtn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Call the validateForm function
        if (!validateForm()) {
            alert('Please fill all the required fields correctly.');
        } else {
            // If form is valid, proceed to submit
            window.location.href = 'upload.html';
        }
    });
});
