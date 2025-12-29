/* -------------------------
   Mock data (shared)
   ------------------------- */
/* -------------------------
   Mock data (expanded)
   Note: ages computed as of 2025-09-12
   ------------------------- */

const doctors = [
  { id: 1, name: "Dr. Amandeep Singh", specialist: "General Physician" },
  { id: 2, name: "Dr. Meera Sharma", specialist: "ENT Specialist" },
  { id: 3, name: "Dr. Ravi Patel", specialist: "Cardiologist" },
  { id: 4, name: "Dr. Sunita Rao", specialist: "Dermatologist" },
  { id: 5, name: "Dr. Anil Kapoor", specialist: "Orthopedist" },
  { id: 6, name: "Dr. Priya Menon", specialist: "Gynecologist" },
  { id: 7, name: "Dr. Karan Aggarwal", specialist: "Pediatrician" },
  { id: 8, name: "Dr. Farah Khan", specialist: "Psychiatrist" },
  { id: 9, name: "Dr. Naveen Joshi", specialist: "Endocrinologist" },
  { id: 10, name: "Dr. Ritu Desai", specialist: "Ophthalmologist" },
  { id: 11, name: "Dr. Sameer Bhatia", specialist: "Pulmonologist" },
  { id: 12, name: "Dr. Leela Iyer", specialist: "Gastroenterologist" },
  { id: 13, name: "Dr. Vikash Choudhary", specialist: "Nephrologist" },
  { id: 14, name: "Dr. Mona Verma", specialist: "Rheumatologist" },
  { id: 15, name: "Dr. Aditya Nair", specialist: "Neurologist" },
  { id: 16, name: "Dr. Hema Prasad", specialist: "Oncologist" },
  { id: 17, name: "Dr. Rakesh Gupta", specialist: "ENT Surgeon" },
  { id: 18, name: "Dr. Aisha Rizvi", specialist: "Allergist / Immunologist" },
  { id: 19, name: "Dr. Prakash Shetty", specialist: "Urologist" },
  { id: 20, name: "Dr. Kavya Rao", specialist: "Physiatrist / Rehab" }
];

let pharmacies = [
  { id: 1, name: "Nabha Pharmacy", medicine: "Paracetamol", status: "Available" },
  { id: 2, name: "HealthPlus Chemist", medicine: "Amoxicillin", status: "Out of Stock" },
  { id: 3, name: "Village Care Store", medicine: "Cough Syrup", status: "Available" },
  { id: 4, name: "CityMed Pharmacy", medicine: "Ibuprofen", status: "Available" },
  { id: 5, name: "Evergreen Drugs", medicine: "Cetirizine", status: "Available" },
  { id: 6, name: "Wellness Pharmacy", medicine: "Metformin", status: "Out of Stock" },
  { id: 7, name: "Neighborhood Chemists", medicine: "Lisinopril", status: "Available" },
  { id: 8, name: "CarePoint Pharmacy", medicine: "Aspirin", status: "Available" },
  { id: 9, name: "TrustCare Drugs", medicine: "Azithromycin", status: "Out of Stock" },
  { id: 10, name: "GreenLeaf Pharmacy", medicine: "Omeprazole", status: "Available" },
  { id: 11, name: "SafeMeds", medicine: "Salbutamol Inhaler", status: "Available" },
  { id: 12, name: "Medico Hub", medicine: "Atorvastatin", status: "Available" },
  { id: 13, name: "Sunrise Pharmacy", medicine: "Insulin (vials)", status: "Out of Stock" },
  { id: 14, name: "Pioneer Chemists", medicine: "Paracetamol (syrup)", status: "Available" },
  { id: 15, name: "Metro Drugs", medicine: "Amoxicillin (capsules)", status: "Available" },
  { id: 16, name: "Central Pharmacy", medicine: "Hydrocortisone Ointment", status: "Available" },
  { id: 17, name: "24x7 Meds", medicine: "Oral Rehydration Salts", status: "Available" },
  { id: 18, name: "Family Care Pharmacy", medicine: "Multivitamin", status: "Available" },
  { id: 19, name: "QuickMeds", medicine: "Dextromethorphan", status: "Out of Stock" },
  { id: 20, name: "Reliable Pharmacy", medicine: "Lorazepam", status: "Available" }
];

const records = [
  { dob: "1990-05-14", age: 35, patient: "Ram Kumar", last_consultation: "2025-08-15", prescription: "Paracetamol 500mg (5 days)" },
  { dob: "1985-11-30", age: 39, patient: "Sita Devi", last_consultation: "2025-08-18", prescription: "ORS Solution + Rest" },
  { dob: "2000-02-20", age: 25, patient: "Rohan Das", last_consultation: "2025-08-20", prescription: "Amoxicillin 250mg (7 days)" },
  { dob: "1978-07-01", age: 47, patient: "Anita Roy", last_consultation: "2025-07-30", prescription: "Antacid + Lifestyle change" },
  { dob: "1995-12-10", age: 29, patient: "Vikram Sen", last_consultation: "2025-09-01", prescription: "Physio + NSAID (as needed)" },
  { dob: "2003-03-05", age: 22, patient: "Pooja Nair", last_consultation: "2025-08-05", prescription: "Iron supplement (4 weeks)" },
  { dob: "1965-09-15", age: 59, patient: "Arjun Mukherjee", last_consultation: "2025-06-20", prescription: "BP meds adjusted" },
  { dob: "1988-04-22", age: 37, patient: "Lina Ghosh", last_consultation: "2025-08-28", prescription: "Allergy meds (antihistamine)" },
  { dob: "1992-10-09", age: 32, patient: "Deepak Verma", last_consultation: "2025-09-05", prescription: "Statin therapy started" },
  { dob: "1970-01-25", age: 55, patient: "Maya Banerjee", last_consultation: "2025-07-10", prescription: "Diabetic diet + Metformin" },
  { dob: "1980-06-30", age: 45, patient: "Pradeep Singh", last_consultation: "2025-08-12", prescription: "Knee injection + rest" },
  { dob: "1998-08-11", age: 27, patient: "Nisha Patel", last_consultation: "2025-08-22", prescription: "Topical cream for rash" },
  { dob: "2005-09-13", age: 19, patient: "Kabir Khan", last_consultation: "2025-09-02", prescription: "Cold & cough syrup (symptomatic)" },
  { dob: "1960-02-02", age: 65, patient: "Rekha Das", last_consultation: "2025-05-19", prescription: "Arthritis management plan" },
  { dob: "1993-07-19", age: 32, patient: "Suresh Reddy", last_consultation: "2025-08-30", prescription: "Short course antibiotics" },
  { dob: "1982-05-05", age: 43, patient: "Tara Iyer", last_consultation: "2025-08-02", prescription: "Thyroid medication adjusted" },
  { dob: "1975-12-31", age: 49, patient: "Sameer Qureshi", last_consultation: "2025-07-25", prescription: "Cardiac follow-up plan" },
  { dob: "1999-09-12", age: 26, patient: "Geeta Sharma", last_consultation: "2025-09-10", prescription: "Monthly contraceptive advice" },
  { dob: "1987-01-01", age: 38, patient: "Manish Roy", last_consultation: "2025-08-08", prescription: "Ulcer treatment (PPI)" },
  { dob: "1994-11-20", age: 30, patient: "Kavita Bose", last_consultation: "2025-09-03", prescription: "Migraine management (preventive trial)" }
];

let doctorQueue = [
  { dob: "1995-04-10", age: 30, patient: "Sohan Lal", symptom: "fever, cough", doctor: "Any", date: "2025-09-06" },
  { dob: "1987-02-18", age: 38, patient: "Meera Devi", symptom: "stomach ache", doctor: "Any", date: "2025-09-07" },
  { dob: "1990-05-14", age: 35, patient: "Ravi Kumar", symptom: "headache, nausea", doctor: "Any", date: "2025-09-08" },
  { dob: "2001-10-09", age: 23, patient: "Priyanka S.", symptom: "sore throat", doctor: "ENT Specialist", date: "2025-09-08" },
  { dob: "1968-03-22", age: 57, patient: "Satish Patel", symptom: "chest discomfort", doctor: "Cardiologist", date: "2025-09-09" },
  { dob: "1975-11-05", age: 49, patient: "Laxmi Nair", symptom: "joint pain", doctor: "Orthopedist", date: "2025-09-09" },
  { dob: "2004-12-01", age: 20, patient: "Aria Roy", symptom: "dizziness", doctor: "Any", date: "2025-09-10" },
  { dob: "1959-06-18", age: 66, patient: "Bhupen Das", symptom: "shortness of breath", doctor: "Pulmonologist", date: "2025-09-10" },
  { dob: "1983-09-30", age: 41, patient: "Richa Sen", symptom: "skin rash", doctor: "Dermatologist", date: "2025-09-11" },
  { dob: "1997-07-14", age: 28, patient: "Ankita Ghosh", symptom: "abdominal pain", doctor: "Gastroenterologist", date: "2025-09-11" },
  { dob: "1950-04-02", age: 75, patient: "Mohammad Ali", symptom: "memory issues", doctor: "Neurologist", date: "2025-09-12" },
  { dob: "1992-10-09", age: 32, patient: "Deepak Verma", symptom: "follow-up", doctor: "Endocrinologist", date: "2025-09-12" },
  { dob: "2006-08-21", age: 19, patient: "Naveen Jr.", symptom: "fever", doctor: "Pediatrician", date: "2025-09-12" },
  { dob: "1989-01-16", age: 36, patient: "Shreya K.", symptom: "anxiety attacks", doctor: "Psychiatrist", date: "2025-09-13" },
  { dob: "1972-12-05", age: 52, patient: "Ramesh Gupta", symptom: "urinary issues", doctor: "Urologist", date: "2025-09-13" },
  { dob: "1998-08-11", age: 27, patient: "Nisha Patel", symptom: "skin irritation", doctor: "Dermatologist", date: "2025-09-14" },
  { dob: "1960-02-02", age: 65, patient: "Rekha Das", symptom: "arthritic pain", doctor: "Rheumatologist", date: "2025-09-14" },
  { dob: "1984-03-03", age: 41, patient: "Vikram Mehta", symptom: "allergic rhinitis", doctor: "Allergist / Immunologist", date: "2025-09-15" },
  { dob: "1993-07-19", age: 32, patient: "Suresh Reddy", symptom: "routine checkup", doctor: "Any", date: "2025-09-15" },
  { dob: "2000-02-20", age: 25, patient: "Rohan Das", symptom: "antibiotic refill", doctor: "Any", date: "2025-09-16" }
];


/* -------------------------
   Page detection & init
   ------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Populate elements that exist on whichever page is open
  if (document.getElementById('doctorSelect')) populateDoctors();
  if (document.getElementById('consultForm')) {
    document.getElementById('consultForm').addEventListener('submit', handleConsultSubmit);
  }
  if (document.getElementById('medicineResults')) renderPharmacyList();
  if (document.getElementById('recordsList')) renderRecords();
  if (document.getElementById('doctorQueue')) renderDoctorQueue();
  updateMetrics();
});

/* -------------------------
   Consult booking
   ------------------------- */
function populateDoctors() {
  const sel = document.getElementById('doctorSelect');
  if (!sel) return;
  sel.innerHTML = '';
  const ph = document.createElement('option');
  ph.value = '';
  ph.disabled = true;
  ph.selected = true;
  ph.text = 'Select a doctor';
  sel.appendChild(ph);
  doctors.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.id;
    opt.text = `${d.name} — ${d.specialist}`;
    sel.appendChild(opt);
  });
}

function handleConsultSubmit(e) {
  e.preventDefault();
  const name = (document.getElementById('patientName')?.value || '').trim();
  const docId = (document.getElementById('doctorSelect')?.value || '').trim();
  const date = (document.getElementById('consultDate')?.value || '').trim();
  const notes = (document.getElementById('consultNotes')?.value || '').trim();
  if (!name || !docId || !date) {
    const res = document.getElementById('consultResult');
    if (res) res.innerText = 'Please fill required fields.';
    return;
  }
  const doc = doctors.find(d => String(d.id) === String(docId));
  doctorQueue.unshift({ patient: name, symptom: notes || 'Not provided', doctor: doc?.name || 'Any', date });
  const res = document.getElementById('consultResult');
  if (res) res.innerText = `✅ Appointment requested with ${doc.name} on ${date}`;
  // reset form
  e.target.reset();
  populateDoctors();
  renderDoctorQueue();
  updateMetrics();
}

/* -------------------------
   Doctor queue (admin)
   ------------------------- */
function renderDoctorQueue() {
  const ul = document.getElementById('doctorQueue');
  if (!ul) return;
  ul.innerHTML = '';
  doctorQueue.forEach((q, idx) => {
    const li = document.createElement('li');
    li.className = 'flex items-start justify-between p-4 bg-white rounded-lg border';
    li.innerHTML = `
      <div>
        <div class="font-semibold">${q.patient}</div>
        <div class="text-sm text-gray-500">${q.symptom}</div>
        <div class="text-xs text-gray-400 mt-1">Doctor: ${q.doctor} • Date: ${q.date}</div>
      </div>
      <div class="flex flex-col gap-2">
        <button class="px-3 py-1 bg-emerald-500 text-white rounded" onclick="acceptRequest(${idx})">Accept</button>
        <button class="px-3 py-1 bg-red-500 text-white rounded" onclick="declineRequest(${idx})">Decline</button>
      </div>
    `;
    ul.appendChild(li);
  });
}

function acceptRequest(i) {
  if (i < 0 || i >= doctorQueue.length) return;
  const req = doctorQueue.splice(i,1)[0];
  alert(`Accepted appointment for ${req.patient} (demo)`);
  renderDoctorQueue();
  updateMetrics();
}
function declineRequest(i) {
  if (i < 0 || i >= doctorQueue.length) return;
  const req = doctorQueue.splice(i,1)[0];
  alert(`Declined appointment for ${req.patient} (demo)`);
  renderDoctorQueue();
  updateMetrics();
}

/* -------------------------
   Pharmacy & Medicines
   ------------------------- */
function renderPharmacyList() {
  const wrap = document.getElementById('medicineResults');
  if (wrap) {
    wrap.innerHTML = '';
    pharmacies.forEach(p => {
      const card = document.createElement('div');
      card.className = 'p-4 bg-white rounded-lg border flex justify-between items-center';
      card.innerHTML = `
        <div>
          <div class="font-semibold">${p.medicine}</div>
          <div class="text-sm text-gray-500">${p.name}</div>
        </div>
        <div class="text-right">
          <div class="font-bold" style="color:${p.status==="Available"?"#059669":"#ef4444"}">${p.status}</div>
        </div>
      `;
      wrap.appendChild(card);
    });
  }

  const adminWrap = document.getElementById('pharmacyList');
  if (adminWrap) {
    adminWrap.innerHTML = '';
    pharmacies.forEach(p => {
      const el = document.createElement('div');
      el.className = 'p-3 bg-white rounded border';
      el.innerHTML = `<div class="font-medium">${p.medicine}</div><div class="text-sm text-gray-500">${p.name} • <span style="color:${p.status==="Available"?"#059669":"#ef4444"}">${p.status}</span></div>`;
      adminWrap.appendChild(el);
    });
  }
  updateMetrics();
}

function checkMedicine() {
  const q = (document.getElementById('medicineInput')?.value || '').trim().toLowerCase();
  const wrap = document.getElementById('medicineResults');
  if (!wrap) return;
  wrap.innerHTML = '';
  if (!q) {
    wrap.innerHTML = '<div class="text-gray-500">Enter a medicine name to search (demo data).</div>';
    return;
  }
  const results = pharmacies.filter(p => p.medicine.toLowerCase().includes(q) || p.name.toLowerCase().includes(q));
  if (results.length === 0) {
    wrap.innerHTML = `<div class="text-gray-500">No results found for "${q}".</div>`;
    return;
  }
  results.forEach(p => {
    const card = document.createElement('div');
    card.className = 'p-4 bg-white rounded-lg border flex justify-between items-center';
    card.innerHTML = `
      <div>
        <div class="font-semibold">${p.medicine}</div>
        <div class="text-sm text-gray-500">${p.name}</div>
      </div>
      <div class="text-right">
        <div class="font-bold" style="color:${p.status==="Available"?"#059669":"#ef4444"}">${p.status}</div>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function updatePharmacyStock() {
  const name = (document.getElementById('adminMedName')?.value || '').trim();
  const status = (document.getElementById('adminMedStatus')?.value || 'Available');
  if (!name) { alert('Enter medicine name'); return; }
  const existing = pharmacies.find(p => p.medicine.toLowerCase() === name.toLowerCase());
  if (existing) existing.status = status;
  else pharmacies.push({ id: Date.now(), name: 'Local Pharmacy (demo)', medicine: name, status });
  if (document.getElementById('adminMedName')) document.getElementById('adminMedName').value = '';
  renderPharmacyList();
  alert('Stock updated (demo)');
}

/* -------------------------
   Symptom checker (rule-based demo)
   ------------------------- */
function checkSymptom() {
  const txt = (document.getElementById('symptomInput')?.value || '').trim().toLowerCase();
  const out = document.getElementById('symptomResult');
  if (!out) return;
  if (!txt) { out.innerText = 'Describe your symptom.'; return; }
  if (txt.includes('fever') || txt.includes('temperature')) out.innerText = '⚠️ Possible viral fever. Recommended: Consult a doctor.';
  else if (txt.includes('cough') || txt.includes('sore throat')) out.innerText = 'ℹ️ Mild cough detected. Monitor and consult if persistent.';
  else if (txt.includes('pain') || txt.includes('ache')) out.innerText = 'ℹ️ Symptom noted. If severe or persistent, consult a doctor.';
  else out.innerText = '✅ No major risk detected (demo). Use teleconsultation for confirmation.';
}
function clearSymptom() { if (document.getElementById('symptomInput')) document.getElementById('symptomInput').value=''; if (document.getElementById('symptomResult')) document.getElementById('symptomResult').innerText=''; }

/* -------------------------
   Records
   ------------------------- */
function renderRecords() {
  const wrap = document.getElementById('recordsList');
  if (!wrap) return;
  wrap.innerHTML = '';
  records.forEach(r => {
    const item = document.createElement('div');
    item.className = 'p-4 bg-white rounded-lg border flex justify-between items-start';
    item.innerHTML = `
      <div>
        <div class="font-semibold">${r.patient}</div>
        <div class="text-sm text-gray-500">Last: ${r.last_consultation}</div>
        <div class="text-sm text-gray-600 mt-2">${r.prescription}</div>
      </div>
      <div><button class="px-3 py-1 bg-[#065f46] text-white rounded" onclick="downloadRecord(${r.id})">Download</button></div>
    `;
    wrap.appendChild(item);
  });
}
function downloadRecord(id) {
  const r = records.find(x => x.id === id);
  if (!r) return alert('Record not found');
  alert(`Downloading (demo) prescription for ${r.patient}: ${r.prescription}`);
}

/* -------------------------
   Metrics
   ------------------------- */
function updateMetrics() {
  if (document.getElementById('mConsults')) document.getElementById('mConsults').innerText = Math.max(0, 120 + doctorQueue.length);
  if (document.getElementById('mMedicines')) document.getElementById('mMedicines').innerText = pharmacies.length;
  if (document.getElementById('mPending')) document.getElementById('mPending').innerText = doctorQueue.length;
}

/* -------------------------
   initial render calls (if any)
   ------------------------- */
renderPharmacyList();
renderRecords();
renderDoctorQueue();
updateMetrics();
