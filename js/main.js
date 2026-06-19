AOS.init({
    duration: 900,
    once: true,
    offset: 120
});



const SUPABASE_URL = "https://ycllpcesnqipmwfzutmx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_UjutOW1Q0xiKoStrTFLXtg_bghGTEpw";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const datosCita = {
            nombre: document.getElementById("citaNombre").value,
            telefono: document.getElementById("citaTelefono").value,
            vehiculo: document.getElementById("citaVehiculo").value,
            placa: document.getElementById("citaPlaca").value,
            servicio: document.getElementById("citaServicio").value,
            fecha: document.getElementById("citaFecha").value,
            hora: document.getElementById("citaHora").value,
            detalle: document.getElementById("citaDetalle").value,
            estado: "Pendiente"
        };

        const { error } = await supabaseClient
            .from("citas")
            .insert([datosCita]);

        if (error) {
            alert("No se pudo registrar la cita. Inténtalo nuevamente.");
            console.error(error);
            return;
        }

        const telefonoRoanci = "51966944029";

        const texto =
`Hola, quiero agendar una cita en Mecánica Automotriz Roanci.

Nombre: ${datosCita.nombre}
Teléfono: ${datosCita.telefono}
Vehículo: ${datosCita.vehiculo}
Placa: ${datosCita.placa || "No especificada"}
Servicio: ${datosCita.servicio}
Fecha deseada: ${datosCita.fecha}
Hora deseada: ${datosCita.hora}
Detalle: ${datosCita.detalle || "Sin detalle adicional"}

La cita también fue registrada en la web.`;

        const url = `https://wa.me/${telefonoRoanci}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
        appointmentForm.reset();
    });
}

document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.navbar-collapse');
        if (menu.classList.contains('show')) {
            new bootstrap.Collapse(menu).hide();
        }
    });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});


document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const vehiculo = document.getElementById("vehiculo").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    const telefono = "51919284086";

    const texto = `Hola, soy ${nombre}. Quiero solicitar una cotización.%0A%0AVehículo: ${vehiculo}%0AServicio: ${servicio}%0ADetalle: ${mensaje}`;

    window.open(`https://wa.me/${telefono}?text=${texto}`, "_blank");
});