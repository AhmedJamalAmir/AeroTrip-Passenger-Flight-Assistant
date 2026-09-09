const flight={
  code:"PK 233",route:"ISB → DXB",airline:"Pakistan International Airlines",status:"ON TIME",
  gate:"B07",boarding:"21:05",departure:"21:45",arrival:"23:20",seat:"18A",paxBag:"1 × 23 kg",
  walk:"4 min"
};
const $=id=>document.getElementById(id);
function showToast(message){$("toast").textContent=message;$("toast").classList.add("show");clearTimeout(window.t);window.t=setTimeout(()=>$("toast").classList.remove("show"),2200)}
function openModal(type){
 let title="",body="";
 if(type==="gate"){
   title="Getting to Gate B07";
   body=`<p>Your gate is <strong>B07</strong>. It is approximately <strong>4 minutes</strong> from your current location.</p><div class="modal-card"><strong>Boarding starts · 21:05</strong><small>Keep your passport and boarding pass ready. Follow the airport signs for Zone B.</small></div>`;
 }else if(type==="status"){
   title="PK 233 · Flight status";
   body=`<p><strong>ON TIME</strong>. Scheduled departure is <strong>21:45</strong> from Islamabad to Dubai.</p><div class="modal-card"><strong>Last passenger update · Now</strong><small>No gate or schedule change is currently shown in this passenger view.</small></div>`;
 }else if(type==="baggage"){
   title="Baggage allowance";
   body=`<p>Your itinerary includes <strong>1 checked bag up to 23 kg</strong> and a <strong>7 kg cabin bag</strong>.</p><div class="modal-card"><strong>Tip</strong><small>Keep valuables, medication and travel documents in your cabin baggage.</small></div>`;
 }else if(type==="seat"){
   title="Your seat · 18A";
   body=`<p>Your assigned seat is <strong>18A</strong>, a window seat.</p><div class="modal-card"><strong>Cabin · Economy</strong><small>Seat information is shown from the passenger's current itinerary.</small></div>`;
 }else{
   title="Flight details"; body=`<p><strong>${flight.code}</strong> · ${flight.route}<br>${flight.airline}<br>Gate ${flight.gate} · Boarding ${flight.boarding} · Departure ${flight.departure}.</p>`;
 }
 $("modalBody").innerHTML=`<div class="eyebrow">PASSENGER HELP</div><h2>${title}</h2>${body}`;
 $("modalBackdrop").classList.remove("hidden");
}
document.querySelectorAll("[data-action]").forEach(el=>el.addEventListener("click",()=>openModal(el.dataset.action)));
$("closeModal").onclick=()=>$("modalBackdrop").classList.add("hidden");
$("modalBackdrop").addEventListener("click",e=>{if(e.target===$("modalBackdrop"))$("modalBackdrop").classList.add("hidden")});
$("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("aerotrip-theme",document.body.classList.contains("dark")?"dark":"light")};
if(localStorage.getItem("aerotrip-theme")==="dark")document.body.classList.add("dark");
$("flightSwitcher").onclick=()=>showToast("Showing your upcoming flight");
$("langBtn").onclick=()=>showToast("Language selector ready for future expansion");
let mins=32;setInterval(()=>{if(mins>0)mins--; $("boardingCountdown").textContent=`${mins} min`},60000);
