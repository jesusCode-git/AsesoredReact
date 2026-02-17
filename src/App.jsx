import { useState, useEffect } from "react";
import {
  BookOpen, Eye, EyeOff, Mail, Lock, User, Phone, ChevronRight,
  Bell, Search, Calendar, Star, Clock, TrendingUp, Award,
  MessageSquare, LogOut, Settings, ChevronDown, Plus, Filter,
  CheckCircle, XCircle, BookMarked, Zap, BarChart2, Home,
  Users, X, Menu
} from "lucide-react";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy: #0D1B2A;
    --navy-mid: #1B2B3B;
    --navy-light: #243447;
    --teal: #00C9A7;
    --teal-dim: #00a88b;
    --amber: #FFB703;
    --rose: #FF6B6B;
    --text-primary: #F0F4F8;
    --text-muted: #8DA3B9;
    --border: rgba(255,255,255,0.07);
    --glass: rgba(255,255,255,0.04);
    --card: rgba(255,255,255,0.06);
  }

  body { font-family: 'Outfit', sans-serif; background: var(--navy); color: var(--text-primary); overflow-x: hidden; }
  .syne { font-family: 'Syne', sans-serif; }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn  { from { opacity:0; transform:scale(.92); } to { opacity:1; transform:scale(1); } }
  @keyframes float    { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
  @keyframes pulse    { 0%,100% { opacity:1; } 50% { opacity:.5; } }
  @keyframes spin     { to { transform:rotate(360deg); } }
  @keyframes shimmer  { 0% { background-position:-600px 0; } 100% { background-position:600px 0; } }
  @keyframes slideRight { from { transform:translateX(-20px); opacity:0; } to { transform:translateX(0); opacity:1; } }

  .anim-fade-up   { animation: fadeUp   .7s cubic-bezier(.22,1,.36,1) both; }
  .anim-fade-in   { animation: fadeIn   .6s ease both; }
  .anim-scale-in  { animation: scaleIn  .5s cubic-bezier(.22,1,.36,1) both; }
  .anim-float     { animation: float 3.5s ease-in-out infinite; }
  .anim-slide-r   { animation: slideRight .5s cubic-bezier(.22,1,.36,1) both; }

  .d1{animation-delay:.05s} .d2{animation-delay:.12s} .d3{animation-delay:.2s}
  .d4{animation-delay:.28s} .d5{animation-delay:.36s} .d6{animation-delay:.44s}

  /* ===== AUTH LAYOUT ===== */
  .auth-root {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }
  @media(max-width:900px){ .auth-root { grid-template-columns:1fr; } .auth-panel { display:none !important; } }

  .auth-panel {
    background: linear-gradient(145deg, #0a1628 0%, #0d2340 40%, #0f1f35 100%);
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 60px 48px;
    position: relative; overflow: hidden;
  }
  .auth-panel::before {
    content:''; position:absolute; inset:0;
    background: radial-gradient(ellipse 70% 60% at 80% 20%, rgba(0,201,167,.18) 0%, transparent 60%),
                radial-gradient(ellipse 50% 50% at 20% 80%, rgba(255,183,3,.1) 0%, transparent 60%);
  }
  .auth-panel-grid {
    position:absolute; inset:0;
    background-image: linear-gradient(rgba(0,201,167,.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,201,167,.06) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  .auth-form-side {
    background: var(--navy-mid);
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 48px 40px;
    position: relative; overflow-y: auto;
  }
  .auth-form-side::before {
    content:''; position:absolute; top:0; left:0; right:0; height:3px;
    background: linear-gradient(90deg, var(--teal), var(--amber), var(--rose));
  }

  .auth-card {
    width: 100%; max-width: 440px;
  }

  .input-wrap {
    position: relative; margin-bottom: 18px;
  }
  .input-wrap label {
    display: block; font-size: 13px; font-weight:600;
    color: var(--text-muted); margin-bottom:8px; letter-spacing:.04em; text-transform:uppercase;
  }
  .input-wrap .icon {
    position:absolute; left:16px; top:50%; transform:translateY(-50%);
    color: var(--text-muted); pointer-events:none;
  }
  .input-wrap .icon-right {
    position:absolute; right:16px; top:50%; transform:translateY(-50%);
    color: var(--text-muted); cursor:pointer; background:none; border:none;
  }
  .field {
    width:100%; padding: 14px 16px 14px 46px;
    background: var(--glass); border: 1.5px solid var(--border);
    border-radius: 12px; color: var(--text-primary);
    font-family:'Outfit',sans-serif; font-size:15px;
    transition: border-color .25s, box-shadow .25s;
    outline: none;
  }
  .field:focus {
    border-color: var(--teal);
    box-shadow: 0 0 0 3px rgba(0,201,167,.15);
  }
  .field::placeholder { color: var(--text-muted); }
  .field-select { appearance:none; padding-right:40px; cursor:pointer; }

  .btn-primary {
    width:100%; padding:15px; border:none; border-radius:12px; cursor:pointer;
    background: linear-gradient(135deg, var(--teal) 0%, #00a88b 100%);
    color: var(--navy); font-family:'Outfit',sans-serif; font-size:16px; font-weight:700;
    letter-spacing:.02em; transition: transform .2s, box-shadow .2s;
    display:flex; align-items:center; justify-content:center; gap:8px;
  }
  .btn-primary:hover { transform:translateY(-2px); box-shadow: 0 12px 28px rgba(0,201,167,.35); }
  .btn-primary:active { transform:translateY(0); }

  .btn-google {
    width:100%; padding:14px; border:1.5px solid var(--border); border-radius:12px;
    background: var(--glass); color:var(--text-primary);
    font-family:'Outfit',sans-serif; font-size:15px; font-weight:500;
    cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px;
    transition: border-color .2s, background .2s;
  }
  .btn-google:hover { border-color:rgba(255,255,255,.2); background:rgba(255,255,255,.08); }

  .divider {
    display:flex; align-items:center; gap:12px; margin:20px 0;
    color:var(--text-muted); font-size:13px;
  }
  .divider::before, .divider::after {
    content:''; flex:1; height:1px; background:var(--border);
  }

  .link-btn {
    background:none; border:none; color:var(--teal); cursor:pointer;
    font-family:'Outfit',sans-serif; font-size:inherit; font-weight:600;
    transition: color .2s;
  }
  .link-btn:hover { color:#00e8c0; }

  .error-msg {
    background: rgba(255,107,107,.12); border:1px solid rgba(255,107,107,.25);
    color: #ff8f8f; border-radius:10px; padding:12px 16px; font-size:14px;
    margin-bottom:18px; display:flex; align-items:center; gap:8px;
  }
  .success-msg {
    background: rgba(0,201,167,.1); border:1px solid rgba(0,201,167,.25);
    color: var(--teal); border-radius:10px; padding:12px 16px; font-size:14px;
    margin-bottom:18px; display:flex; align-items:center; gap:8px;
  }

  /* ===== FLOATING SHAPES ===== */
  .shape {
    position:absolute; border-radius:16px; opacity:.6;
  }

  /* ===== DASHBOARD ===== */
  .dash-root {
    display: grid;
    grid-template-columns: 260px 1fr;
    min-height: 100vh;
  }
  @media(max-width:900px){ .dash-root { grid-template-columns:1fr; } }

  .sidebar {
    background: #0a1220;
    border-right: 1px solid var(--border);
    display:flex; flex-direction:column;
    padding: 0;
    position: sticky; top:0; height:100vh;
    overflow-y:auto;
  }
  @media(max-width:900px){ .sidebar { display:none; } }
  .sidebar.mobile-open { display:flex; position:fixed; inset:0; z-index:100; width:280px; }

  .sidebar-logo {
    padding: 28px 24px; border-bottom:1px solid var(--border);
    display:flex; align-items:center; gap:12px;
  }
  .logo-icon {
    width:42px; height:42px; border-radius:10px;
    background:linear-gradient(135deg,var(--teal),#00a88b);
    display:flex; align-items:center; justify-content:center;
  }

  .sidebar-nav { flex:1; padding:16px 12px; }
  .nav-section { margin-bottom:28px; }
  .nav-label {
    font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase;
    color:var(--text-muted); padding:0 12px; margin-bottom:8px;
  }
  .nav-item {
    display:flex; align-items:center; gap:12px;
    padding:11px 14px; border-radius:10px;
    color:var(--text-muted); font-size:14.5px; font-weight:500;
    cursor:pointer; transition:all .2s;
    text-decoration:none; border:none; background:none; width:100%;
    position:relative;
  }
  .nav-item:hover { background:var(--glass); color:var(--text-primary); }
  .nav-item.active {
    background:rgba(0,201,167,.1);
    color:var(--teal);
  }
  .nav-item.active::before {
    content:''; position:absolute; left:0; top:4px; bottom:4px;
    width:3px; border-radius:2px; background:var(--teal);
  }
  .nav-badge {
    margin-left:auto; background:var(--rose); color:#fff;
    font-size:11px; font-weight:700; padding:2px 7px; border-radius:99px;
  }
  .nav-badge.teal { background:var(--teal); color:var(--navy); }

  .sidebar-user {
    padding:16px 20px; border-top:1px solid var(--border);
    display:flex; align-items:center; gap:12px;
  }
  .user-avatar {
    width:40px; height:40px; border-radius:10px;
    background:linear-gradient(135deg,#4f46e5,#7c3aed);
    display:flex; align-items:center; justify-content:center;
    font-size:17px; font-weight:700; color:#fff; flex-shrink:0;
  }

  /* Main content */
  .dash-main { overflow-y:auto; }

  .dash-topbar {
    padding:24px 32px; display:flex; align-items:center; justify-content:space-between;
    border-bottom:1px solid var(--border); position:sticky; top:0;
    background:rgba(27,43,59,.85); backdrop-filter:blur(12px); z-index:40;
  }
  @media(max-width:600px){ .dash-topbar { padding:16px 20px; } }

  .search-bar {
    display:flex; align-items:center; gap:10px;
    background:var(--glass); border:1.5px solid var(--border);
    border-radius:10px; padding:9px 16px; width:260px;
  }
  .search-bar input {
    background:none; border:none; outline:none;
    color:var(--text-primary); font-family:'Outfit',sans-serif; font-size:14px;
    width:100%;
  }
  .search-bar input::placeholder { color:var(--text-muted); }

  .topbar-actions { display:flex; align-items:center; gap:12px; }
  .icon-btn {
    width:38px; height:38px; border-radius:9px; border:1px solid var(--border);
    background:var(--glass); cursor:pointer; display:flex; align-items:center;
    justify-content:center; color:var(--text-muted); transition:all .2s;
    position:relative;
  }
  .icon-btn:hover { border-color:rgba(255,255,255,.15); color:var(--text-primary); }
  .notif-dot {
    position:absolute; top:6px; right:6px; width:7px; height:7px;
    background:var(--rose); border-radius:50%; border:1.5px solid var(--navy-mid);
  }

  /* Dashboard content */
  .dash-content { padding:32px; }
  @media(max-width:600px){ .dash-content { padding:20px; } }

  .greeting { margin-bottom:32px; }

  /* Stats grid */
  .stats-grid {
    display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:32px;
  }
  @media(max-width:1100px){ .stats-grid { grid-template-columns:repeat(2,1fr); } }
  @media(max-width:500px){ .stats-grid { grid-template-columns:1fr; } }

  .stat-card {
    background:var(--card); border:1px solid var(--border);
    border-radius:16px; padding:22px; position:relative; overflow:hidden;
    transition: transform .25s, box-shadow .25s;
  }
  .stat-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,.3); }
  .stat-card::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:3px;
  }
  .stat-card.teal::after   { background:linear-gradient(90deg,var(--teal),#00e8c0); }
  .stat-card.amber::after  { background:linear-gradient(90deg,var(--amber),#ffd060); }
  .stat-card.rose::after   { background:linear-gradient(90deg,var(--rose),#ff9f9f); }
  .stat-card.purple::after { background:linear-gradient(90deg,#7c3aed,#a78bfa); }

  .stat-icon {
    width:44px; height:44px; border-radius:11px;
    display:flex; align-items:center; justify-content:center; margin-bottom:16px;
  }
  .stat-icon.teal   { background:rgba(0,201,167,.15); color:var(--teal); }
  .stat-icon.amber  { background:rgba(255,183,3,.15);  color:var(--amber); }
  .stat-icon.rose   { background:rgba(255,107,107,.15);color:var(--rose); }
  .stat-icon.purple { background:rgba(124,58,237,.15); color:#a78bfa; }

  .stat-value { font-family:'Syne',sans-serif; font-size:32px; font-weight:800; line-height:1; margin-bottom:6px; }
  .stat-label { color:var(--text-muted); font-size:13px; font-weight:500; }
  .stat-change { font-size:12px; margin-top:8px; display:flex; align-items:center; gap:4px; }
  .stat-change.up   { color:var(--teal); }
  .stat-change.down { color:var(--rose); }

  /* Content grid */
  .content-grid {
    display:grid; grid-template-columns:1fr 360px; gap:24px;
  }
  @media(max-width:1100px){ .content-grid { grid-template-columns:1fr; } }

  .section-card {
    background:var(--card); border:1px solid var(--border); border-radius:16px; overflow:hidden;
  }
  .section-header {
    padding:20px 24px; border-bottom:1px solid var(--border);
    display:flex; align-items:center; justify-content:space-between;
  }
  .section-title { font-family:'Syne',sans-serif; font-size:17px; font-weight:700; }
  .section-body { padding:24px; }

  /* Asesoría cards */
  .asesoria-list { display:flex; flex-direction:column; gap:12px; }
  .asesoria-item {
    background:var(--glass); border:1px solid var(--border); border-radius:12px;
    padding:16px; display:flex; align-items:center; gap:14px;
    transition:all .2s;
  }
  .asesoria-item:hover { border-color:rgba(0,201,167,.3); background:rgba(0,201,167,.05); }

  .asesoria-avatar {
    width:46px; height:46px; border-radius:10px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center; font-size:20px;
  }
  .asesoria-info { flex:1; min-width:0; }
  .asesoria-subject { font-weight:700; font-size:15px; margin-bottom:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .asesoria-meta   { color:var(--text-muted); font-size:13px; }
  .asesoria-time   { text-align:right; flex-shrink:0; }
  .asesoria-hour   { font-weight:700; font-size:15px; color:var(--teal); }
  .asesoria-date   { color:var(--text-muted); font-size:12px; }

  .status-badge {
    display:inline-flex; align-items:center; gap:5px;
    padding:3px 10px; border-radius:99px; font-size:11.5px; font-weight:600;
  }
  .status-badge.pending  { background:rgba(255,183,3,.12);   color:var(--amber); }
  .status-badge.confirm  { background:rgba(0,201,167,.12);   color:var(--teal);  }
  .status-badge.cancel   { background:rgba(255,107,107,.12); color:var(--rose);  }

  /* Mini calendar */
  .cal-grid {
    display:grid; grid-template-columns:repeat(7,1fr); gap:4px;
    text-align:center;
  }
  .cal-day-name { font-size:11px; color:var(--text-muted); font-weight:600; padding:4px 0; }
  .cal-day {
    aspect-ratio:1; display:flex; align-items:center; justify-content:center;
    border-radius:8px; font-size:13px; cursor:pointer;
    transition:all .15s;
  }
  .cal-day:hover { background:var(--glass); }
  .cal-day.today { background:rgba(0,201,167,.15); color:var(--teal); font-weight:700; }
  .cal-day.has-event { position:relative; font-weight:600; }
  .cal-day.has-event::after {
    content:''; position:absolute; bottom:3px; left:50%; transform:translateX(-50%);
    width:4px; height:4px; border-radius:50%; background:var(--amber);
  }
  .cal-day.other-month { color:rgba(255,255,255,.2); }

  /* Quick actions */
  .quick-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .quick-btn {
    background:var(--glass); border:1px solid var(--border); border-radius:12px;
    padding:16px 14px; cursor:pointer; transition:all .2s;
    display:flex; flex-direction:column; align-items:center; gap:8px;
    color:var(--text-primary); text-align:center;
  }
  .quick-btn:hover { border-color:rgba(0,201,167,.3); background:rgba(0,201,167,.06); transform:translateY(-2px); }
  .quick-icon {
    width:40px; height:40px; border-radius:10px;
    display:flex; align-items:center; justify-content:center;
  }
  .quick-label { font-size:13px; font-weight:600; }

  /* Asesor card */
  .asesor-list { display:flex; flex-direction:column; gap:10px; }
  .asesor-item {
    display:flex; align-items:center; gap:12px;
    padding:14px 16px; background:var(--glass); border:1px solid var(--border);
    border-radius:12px; transition:all .2s;
  }
  .asesor-item:hover { border-color:rgba(0,201,167,.3); background:rgba(0,201,167,.05); }
  .asesor-avatar { width:44px; height:44px; border-radius:10px; font-size:20px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .asesor-info { flex:1; min-width:0; }
  .asesor-name { font-weight:700; font-size:14.5px; }
  .asesor-subject { color:var(--text-muted); font-size:12.5px; }
  .asesor-rating { display:flex; align-items:center; gap:3px; font-size:13px; font-weight:600; color:var(--amber); }

  .btn-sm {
    padding:7px 14px; border:1.5px solid var(--teal); border-radius:8px;
    background:rgba(0,201,167,.08); color:var(--teal); font-family:'Outfit',sans-serif;
    font-size:12.5px; font-weight:600; cursor:pointer; transition:all .2s; white-space:nowrap;
  }
  .btn-sm:hover { background:var(--teal); color:var(--navy); }

  /* Progress */
  .progress-bar-wrap {
    background:rgba(255,255,255,.07); border-radius:99px; height:8px; overflow:hidden;
  }
  .progress-bar {
    height:100%; border-radius:99px;
    transition: width 1s cubic-bezier(.22,1,.36,1);
  }

  .materias-list { display:flex; flex-direction:column; gap:14px; }
  .materia-row { display:flex; flex-direction:column; gap:6px; }
  .materia-header { display:flex; justify-content:space-between; font-size:13.5px; font-weight:500; }
  .materia-pct { color:var(--text-muted); font-size:12.5px; }

  /* Hamburger */
  .hamburger { display:none; }
  @media(max-width:900px){ .hamburger { display:flex; } }

  /* Toast */
  .toast {
    position:fixed; bottom:28px; right:28px; z-index:999;
    background:var(--navy-light); border:1px solid var(--teal);
    border-radius:14px; padding:14px 20px; display:flex; align-items:center; gap:10px;
    box-shadow:0 20px 60px rgba(0,0,0,.5);
    animation:fadeUp .4s cubic-bezier(.22,1,.36,1) both;
  }

  .overlay {
    display:none;
    position:fixed; inset:0; background:rgba(0,0,0,.6); z-index:99;
  }
  .overlay.visible { display:block; }

  /* Scrollbar */
  ::-webkit-scrollbar { width:5px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:rgba(255,255,255,.1); border-radius:99px; }
  ::-webkit-scrollbar-thumb:hover { background:rgba(255,255,255,.18); }
`;

/* ─────────── helpers ─────────── */
const DAYS_ABBR = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

function MiniCalendar() {
  const today = new Date();
  const [current, setCurrent] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const year = current.getFullYear();
  const month = current.getMonth();
  const evDays = new Set([8, 13, 20, 27]);

  const firstDow = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = firstDow - 1; i >= 0; i--) cells.push({ d: daysInPrev - i, other: true });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ d });
  const rem = 42 - cells.length;
  for (let d = 1; d <= rem; d++) cells.push({ d, other: true });

  const MONTHS = ["Enero","Febrero","Marzo","Abril","Mayo","Junio",
                  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
        <button onClick={() => setCurrent(new Date(year, month - 1, 1))}
          style={{ background:"none", border:"none", color:"var(--text-muted)", cursor:"pointer", fontSize:18 }}>‹</button>
        <span style={{ fontWeight:700, fontSize:15 }}>{MONTHS[month]} {year}</span>
        <button onClick={() => setCurrent(new Date(year, month + 1, 1))}
          style={{ background:"none", border:"none", color:"var(--text-muted)", cursor:"pointer", fontSize:18 }}>›</button>
      </div>
      <div className="cal-grid">
        {DAYS_ABBR.map(d => <div key={d} className="cal-day-name">{d}</div>)}
        {cells.map((c, i) => (
          <div key={i} className={[
            "cal-day",
            c.other ? "other-month" : "",
            !c.other && c.d === today.getDate() && month === today.getMonth() ? "today" : "",
            !c.other && evDays.has(c.d) ? "has-event" : ""
          ].join(" ")}>{c.d}</div>
        ))}
      </div>
    </div>
  );
}

/* ─────────── LOGIN ─────────── */
function LoginPage({ goRegister, goLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !pass) { setError("Por favor completa todos los campos."); return; }
    if (!email.includes("@")) { setError("Ingresa un correo válido."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); goLogin(); }, 1400);
  }

  return (
    <div className="auth-root">
      {/* panel izquierdo */}
      <div className="auth-panel">
        <div className="auth-panel-grid" />

        {/* shapes flotantes */}
        <div className="shape anim-float" style={{ width:90,height:90,background:"linear-gradient(135deg,var(--teal),#00a88b)",top:"12%",right:"15%",animationDelay:"0s",opacity:.35 }} />
        <div className="shape anim-float" style={{ width:55,height:55,background:"linear-gradient(135deg,var(--amber),#ffd060)",top:"35%",left:"8%",animationDelay:"1.2s",opacity:.4 }} />
        <div className="shape anim-float" style={{ width:70,height:70,background:"linear-gradient(135deg,#7c3aed,#a78bfa)",bottom:"25%",right:"8%",animationDelay:"0.7s",opacity:.3 }} />
        <div className="shape anim-float" style={{ width:40,height:40,background:"var(--rose)",bottom:"15%",left:"20%",animationDelay:"1.8s",opacity:.35 }} />

        <div style={{ position:"relative", zIndex:1, textAlign:"center", maxWidth:380 }}>
          <div className="anim-fade-up d1" style={{ width:72,height:72,borderRadius:18,background:"linear-gradient(135deg,var(--teal),#00a88b)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 28px" }}>
            <BookOpen size={36} color="#0D1B2A" />
          </div>
          <h1 className="syne anim-fade-up d2" style={{ fontSize:42,fontWeight:800,lineHeight:1.1,marginBottom:16 }}>
            Bienvenido a<br />
            <span style={{ background:"linear-gradient(90deg,var(--teal),#00e8c0)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              AsesoRed
            </span>
          </h1>
          <p className="anim-fade-up d3" style={{ color:"var(--text-muted)",fontSize:17,lineHeight:1.6,marginBottom:40 }}>
            La plataforma de asesorías académicas del IEST Anáhuac. Conecta, aprende y crece junto a tu comunidad.
          </p>

          <div className="anim-fade-up d4" style={{ display:"flex",flexDirection:"column",gap:14 }}>
            {[
              { icon:"🎓", text:"Más de 500 estudiantes activos" },
              { icon:"⭐", text:"4.9/5 de satisfacción promedio" },
              { icon:"📅", text:"Agenda en menos de 2 minutos" },
            ].map((item, i) => (
              <div key={i} style={{ display:"flex",alignItems:"center",gap:12,background:"rgba(255,255,255,.05)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 18px",textAlign:"left" }}>
                <span style={{ fontSize:22 }}>{item.icon}</span>
                <span style={{ color:"var(--text-muted)",fontSize:14.5,fontWeight:500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* formulario */}
      <div className="auth-form-side">
        <div className="auth-card anim-scale-in">
          <h2 className="syne" style={{ fontSize:28,fontWeight:800,marginBottom:6 }}>Iniciar Sesión</h2>
          <p style={{ color:"var(--text-muted)",fontSize:15,marginBottom:28 }}>
            ¿No tienes cuenta?{" "}
            <button className="link-btn" onClick={goRegister}>Regístrate gratis</button>
          </p>

          {error && (
            <div className="error-msg"><XCircle size={16}/>{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-wrap">
              <label>Correo institucional</label>
              <span className="icon"><Mail size={17}/></span>
              <input className="field" type="email" placeholder="usuario@anahuac.mx"
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="input-wrap">
              <label>Contraseña</label>
              <span className="icon"><Lock size={17}/></span>
              <input className="field" type={showPass ? "text" : "password"} placeholder="••••••••"
                value={pass} onChange={e => setPass(e.target.value)} style={{ paddingRight:48 }} />
              <button type="button" className="icon-right" onClick={() => setShowPass(!showPass)}>
                {showPass ? <EyeOff size={17}/> : <Eye size={17}/>}
              </button>
            </div>

            <div style={{ display:"flex",justifyContent:"flex-end",marginBottom:22,marginTop:-6 }}>
              <button type="button" className="link-btn" style={{ fontSize:13 }}>¿Olvidaste tu contraseña?</button>
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading
                ? <><span style={{ width:18,height:18,border:"2.5px solid rgba(0,0,0,.3)",borderTopColor:"#0D1B2A",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block" }}/> Verificando...</>
                : <><span>Entrar</span><ChevronRight size={18}/></>
              }
            </button>
          </form>

          <div className="divider">o continúa con</div>

          <button className="btn-google">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar con Google
          </button>

          <p style={{ textAlign:"center",color:"var(--text-muted)",fontSize:12.5,marginTop:24,lineHeight:1.6 }}>
            Al ingresar aceptas los <button className="link-btn" style={{ fontSize:12.5 }}>Términos de Uso</button> y{" "}
            <button className="link-btn" style={{ fontSize:12.5 }}>Política de Privacidad</button> de AsesoRed.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────── REGISTER ─────────── */
function RegisterPage({ goLogin }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ nombre:"",apellido:"",matricula:"",email:"",telefono:"",carrera:"",semestre:"",rol:"alumno",pass:"",pass2:"" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function upd(k, v) { setForm(f => ({ ...f, [k]: v })); }

  function next(e) {
    e.preventDefault(); setError("");
    if (step === 1) {
      if (!form.nombre||!form.apellido||!form.matricula||!form.email) { setError("Completa todos los campos."); return; }
      if (!form.email.includes("@")) { setError("Ingresa un correo válido."); return; }
      setStep(2);
    } else {
      if (!form.pass||!form.pass2) { setError("Ingresa y confirma tu contraseña."); return; }
      if (form.pass.length < 8) { setError("La contraseña debe tener al menos 8 caracteres."); return; }
      if (form.pass !== form.pass2) { setError("Las contraseñas no coinciden."); return; }
      setLoading(true);
      setTimeout(() => { setLoading(false); goLogin(); }, 1500);
    }
  }

  const CARRERAS = ["Ingeniería en Sistemas","Administración de Empresas","Contaduría Pública",
                    "Mercadotecnia","Derecho","Diseño Gráfico","Psicología","Arquitectura"];

  return (
    <div className="auth-root">
      <div className="auth-panel">
        <div className="auth-panel-grid" />
        <div className="shape anim-float" style={{ width:80,height:80,background:"linear-gradient(135deg,var(--amber),#ffd060)",top:"15%",right:"10%",animationDelay:"0.3s",opacity:.35,borderRadius:20 }} />
        <div className="shape anim-float" style={{ width:60,height:60,background:"linear-gradient(135deg,var(--rose),#ff9f9f)",bottom:"20%",left:"10%",animationDelay:"1s",opacity:.3,borderRadius:"50%" }} />
        <div className="shape anim-float" style={{ width:50,height:50,background:"linear-gradient(135deg,var(--teal),#00e8c0)",top:"45%",left:"5%",animationDelay:"1.8s",opacity:.3,borderRadius:12 }} />

        <div style={{ position:"relative",zIndex:1,textAlign:"center",maxWidth:360 }}>
          <div style={{ width:72,height:72,borderRadius:18,background:"linear-gradient(135deg,var(--amber),#ffd060)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 28px" }}>
            <Users size={36} color="#0D1B2A" />
          </div>
          <h1 className="syne anim-fade-up d1" style={{ fontSize:38,fontWeight:800,lineHeight:1.15,marginBottom:16 }}>
            Únete a la comunidad<br />
            <span style={{ background:"linear-gradient(90deg,var(--amber),#ffd060)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Anáhuac
            </span>
          </h1>
          <p className="anim-fade-up d2" style={{ color:"var(--text-muted)",fontSize:16,lineHeight:1.6,marginBottom:36 }}>
            Crea tu cuenta en minutos y empieza a conectar con asesores y estudiantes de tu institución.
          </p>

          {/* Progress visual */}
          <div className="anim-fade-up d3" style={{ display:"flex",gap:12,justifyContent:"center" }}>
            {[1,2].map(s => (
              <div key={s} style={{ display:"flex",alignItems:"center",gap:8 }}>
                <div style={{
                  width:36,height:36,borderRadius:10,
                  background: step >= s ? "linear-gradient(135deg,var(--teal),#00a88b)" : "rgba(255,255,255,.08)",
                  border: step >= s ? "none" : "1.5px solid var(--border)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontWeight:700,fontSize:15,
                  color: step >= s ? "var(--navy)" : "var(--text-muted)",
                  transition:"all .3s"
                }}>
                  {step > s ? <CheckCircle size={18}/> : s}
                </div>
                <span style={{ color: step >= s ? "var(--text-primary)" : "var(--text-muted)", fontSize:13.5, fontWeight:600 }}>
                  {s===1 ? "Datos personales" : "Cuenta y rol"}
                </span>
                {s < 2 && <ChevronRight size={14} color="var(--text-muted)"/>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-card anim-scale-in">
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6 }}>
            <h2 className="syne" style={{ fontSize:26,fontWeight:800 }}>
              {step===1 ? "Datos personales" : "Tu cuenta"}
            </h2>
            <span style={{ color:"var(--text-muted)",fontSize:13 }}>Paso {step}/2</span>
          </div>
          <p style={{ color:"var(--text-muted)",fontSize:15,marginBottom:24 }}>
            ¿Ya tienes cuenta?{" "}
            <button className="link-btn" onClick={goLogin}>Inicia sesión</button>
          </p>

          {error && <div className="error-msg"><XCircle size={16}/>{error}</div>}

          <form onSubmit={next}>
            {step === 1 ? (
              <>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:0 }}>
                  <div className="input-wrap">
                    <label>Nombre</label>
                    <span className="icon"><User size={16}/></span>
                    <input className="field" placeholder="Juan" value={form.nombre} onChange={e=>upd("nombre",e.target.value)} />
                  </div>
                  <div className="input-wrap">
                    <label>Apellido</label>
                    <span className="icon"><User size={16}/></span>
                    <input className="field" placeholder="García" value={form.apellido} onChange={e=>upd("apellido",e.target.value)} />
                  </div>
                </div>
                <div className="input-wrap">
                  <label>Matrícula</label>
                  <span className="icon"><Award size={16}/></span>
                  <input className="field" placeholder="Ej: 2023001234" value={form.matricula} onChange={e=>upd("matricula",e.target.value)} />
                </div>
                <div className="input-wrap">
                  <label>Correo institucional</label>
                  <span className="icon"><Mail size={16}/></span>
                  <input className="field" type="email" placeholder="usuario@anahuac.mx" value={form.email} onChange={e=>upd("email",e.target.value)} />
                </div>
                <div className="input-wrap">
                  <label>Teléfono (opcional)</label>
                  <span className="icon"><Phone size={16}/></span>
                  <input className="field" placeholder="+52 614 000 0000" value={form.telefono} onChange={e=>upd("telefono",e.target.value)} />
                </div>
              </>
            ) : (
              <>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  <div className="input-wrap">
                    <label>Carrera</label>
                    <span className="icon"><BookOpen size={16}/></span>
                    <select className="field field-select" value={form.carrera} onChange={e=>upd("carrera",e.target.value)}>
                      <option value="">Seleccionar...</option>
                      {CARRERAS.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="input-wrap">
                    <label>Semestre</label>
                    <span className="icon"><TrendingUp size={16}/></span>
                    <select className="field field-select" value={form.semestre} onChange={e=>upd("semestre",e.target.value)}>
                      <option value="">Semestre</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(s=><option key={s} value={s}>{s}°</option>)}
                    </select>
                  </div>
                </div>

                <div className="input-wrap">
                  <label>Tipo de cuenta</label>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:0 }}>
                    {[{v:"alumno",l:"👨‍🎓 Alumno"},{v:"asesor",l:"👨‍🏫 Asesor"}].map(r=>(
                      <label key={r.v} style={{
                        display:"flex",alignItems:"center",justifyContent:"center",
                        padding:"13px",borderRadius:10,cursor:"pointer",
                        border: form.rol===r.v ? "2px solid var(--teal)" : "1.5px solid var(--border)",
                        background: form.rol===r.v ? "rgba(0,201,167,.1)" : "var(--glass)",
                        color: form.rol===r.v ? "var(--teal)" : "var(--text-muted)",
                        fontWeight:600,fontSize:14,transition:"all .2s",gap:6
                      }}>
                        <input type="radio" name="rol" value={r.v} style={{ display:"none" }}
                          checked={form.rol===r.v} onChange={()=>upd("rol",r.v)} />
                        {r.l}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="input-wrap" style={{ marginTop:4 }}>
                  <label>Contraseña</label>
                  <span className="icon"><Lock size={16}/></span>
                  <input className="field" type={showPass?"text":"password"} placeholder="Mínimo 8 caracteres"
                    value={form.pass} onChange={e=>upd("pass",e.target.value)} style={{ paddingRight:48 }} />
                  <button type="button" className="icon-right" onClick={()=>setShowPass(!showPass)}>
                    {showPass?<EyeOff size={16}/>:<Eye size={16}/>}
                  </button>
                </div>
                <div className="input-wrap">
                  <label>Confirmar contraseña</label>
                  <span className="icon"><Lock size={16}/></span>
                  <input className="field" type="password" placeholder="Repite tu contraseña"
                    value={form.pass2} onChange={e=>upd("pass2",e.target.value)} />
                </div>
              </>
            )}

            <div style={{ display:"flex",gap:12,marginTop:4 }}>
              {step===2 && (
                <button type="button" onClick={()=>{ setStep(1); setError(""); }}
                  style={{ flex:1,padding:"14px",borderRadius:12,border:"1.5px solid var(--border)",background:"var(--glass)",color:"var(--text-primary)",fontFamily:"'Outfit',sans-serif",fontSize:15,fontWeight:600,cursor:"pointer" }}>
                  Atrás
                </button>
              )}
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading
                  ? <><span style={{ width:18,height:18,border:"2.5px solid rgba(0,0,0,.3)",borderTopColor:"#0D1B2A",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block" }}/> Creando cuenta...</>
                  : step===1 ? <><span>Continuar</span><ChevronRight size={18}/></> : <><CheckCircle size={18}/><span>Crear cuenta</span></>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ─────────── DASHBOARD ─────────── */
function Dashboard({ goLogout }) {
  const [activeNav, setActiveNav] = useState("inicio");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  function toast(msg) {
    setToastMsg(msg); setShowToast(true);
    setTimeout(() => setShowToast(false), 2800);
  }

  const asesorias = [
    { subject:"Cálculo Diferencial", asesor:"Prof. Marco Torres", emoji:"📐", time:"10:00", date:"Hoy", status:"confirm", color:"#4f46e5" },
    { subject:"Programación Orientada a Objetos", asesor:"Sofía Reyes", emoji:"💻", time:"13:30", date:"Mañana", status:"pending", color:"#0891b2" },
    { subject:"Álgebra Lineal", asesor:"Carlos Mendoza", emoji:"🔢", time:"15:00", date:"Vie 21 Feb", status:"confirm", color:"#059669" },
    { subject:"Física II", asesor:"Ana López", emoji:"⚛️", time:"09:00", date:"Sáb 22 Feb", status:"pending", color:"#d97706" },
  ];

  const asesores = [
    { name:"Prof. Marco Torres", subject:"Cálculo • Álgebra", rating:4.9, emoji:"👨‍🏫", reviews:128 },
    { name:"Sofía Reyes", subject:"Programación • BD", rating:4.8, emoji:"👩‍💻", reviews:94 },
    { name:"Carlos Mendoza", subject:"Álgebra • Geometría", rating:4.7, emoji:"👨‍🎓", reviews:67 },
  ];

  const materias = [
    { name:"Cálculo Diferencial", pct:68, color:"var(--teal)" },
    { name:"Programación OO", pct:85, color:"#7c3aed" },
    { name:"Álgebra Lineal", pct:54, color:"var(--amber)" },
    { name:"Física II", pct:40, color:"var(--rose)" },
  ];

  const navItems = [
    { id:"inicio",   icon:Home,      label:"Inicio" },
    { id:"buscar",   icon:Search,    label:"Buscar asesor" },
    { id:"citas",    icon:Calendar,  label:"Mis citas",    badge:"4", badgeColor:"teal" },
    { id:"mensajes", icon:MessageSquare,label:"Mensajes",  badge:"2" },
    { id:"progreso", icon:BarChart2, label:"Mi progreso" },
    { id:"asesores", icon:Users,     label:"Asesores" },
  ];

  return (
    <div className="dash-root">
      {/* sidebar */}
      <aside className={`sidebar${mobileOpen?" mobile-open":""}`}>
        <div className="sidebar-logo">
          <div className="logo-icon"><BookOpen size={22} color="#0D1B2A"/></div>
          <span className="syne" style={{ fontSize:20,fontWeight:800 }}>AsesoRed</span>
          {mobileOpen && (
            <button onClick={()=>setMobileOpen(false)} style={{ marginLeft:"auto",background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer" }}>
              <X size={20}/>
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-label">Principal</div>
            {navItems.map(item => (
              <button key={item.id} className={`nav-item${activeNav===item.id?" active":""}`}
                onClick={()=>{ setActiveNav(item.id); setMobileOpen(false); }}>
                <item.icon size={18}/>
                <span>{item.label}</span>
                {item.badge && <span className={`nav-badge${item.badgeColor?" "+item.badgeColor:""}`}>{item.badge}</span>}
              </button>
            ))}
          </div>
          <div className="nav-section">
            <div className="nav-label">Cuenta</div>
            <button className="nav-item" onClick={()=>{ setActiveNav("config"); setMobileOpen(false); }}>
              <Settings size={18}/><span>Configuración</span>
            </button>
            <button className="nav-item" onClick={goLogout}>
              <LogOut size={18}/><span>Cerrar sesión</span>
            </button>
          </div>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">JG</div>
          <div style={{ flex:1,minWidth:0 }}>
            <div style={{ fontWeight:700,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>Juan García</div>
            <div style={{ color:"var(--text-muted)",fontSize:12 }}>Alumno • 4° Semestre</div>
          </div>
        </div>
      </aside>

      {/* overlay mobile */}
      <div className={`overlay${mobileOpen?" visible":""}`} onClick={()=>setMobileOpen(false)} />

      {/* main */}
      <main className="dash-main">
        {/* topbar */}
        <div className="dash-topbar">
          <div style={{ display:"flex",alignItems:"center",gap:14 }}>
            <button className={`icon-btn hamburger`} onClick={()=>setMobileOpen(true)}>
              <Menu size={18}/>
            </button>
            <div className="search-bar">
              <Search size={16} color="var(--text-muted)"/>
              <input placeholder="Buscar materia, asesor..." />
            </div>
          </div>
          <div className="topbar-actions">
            <div className="icon-btn" style={{ cursor:"pointer" }}>
              <Bell size={17}/>
              <div className="notif-dot"/>
            </div>
            <div style={{ width:36,height:36,borderRadius:9,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:14,cursor:"pointer" }}>
              JG
            </div>
          </div>
        </div>

        {/* content */}
        <div className="dash-content">
          {/* greeting */}
          <div className="greeting anim-fade-up">
            <h1 className="syne" style={{ fontSize:28,fontWeight:800,marginBottom:6 }}>
              Buenos días, Juan 👋
            </h1>
            <p style={{ color:"var(--text-muted)",fontSize:15 }}>
              Tienes <strong style={{ color:"var(--teal)" }}>2 asesorías confirmadas</strong> para hoy. ¡Sigue así!
            </p>
          </div>

          {/* stats */}
          <div className="stats-grid">
            {[
              { label:"Asesorías totales",  value:"24",   change:"+3 este mes",    dir:"up",   icon:BookOpen,    color:"teal"   },
              { label:"Horas aprendidas",   value:"18h",  change:"+5h esta semana",dir:"up",   icon:Clock,       color:"amber"  },
              { label:"Materias activas",   value:"4",    change:"1 nueva",        dir:"up",   icon:BookMarked,  color:"purple" },
              { label:"Promedio de notas",  value:"8.4",  change:"-0.2 vs anterior",dir:"down", icon:TrendingUp,  color:"rose"   },
            ].map((s,i) => (
              <div key={i} className={`stat-card ${s.color} anim-fade-up d${i+1}`}>
                <div className={`stat-icon ${s.color}`}><s.icon size={22}/></div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                <div className={`stat-change ${s.dir}`}>
                  {s.dir==="up" ? "▲" : "▼"} {s.change}
                </div>
              </div>
            ))}
          </div>

          {/* content grid */}
          <div className="content-grid">
            {/* left col */}
            <div style={{ display:"flex",flexDirection:"column",gap:20 }}>

              {/* próximas asesorías */}
              <div className="section-card anim-fade-up d2">
                <div className="section-header">
                  <span className="section-title">Próximas Asesorías</span>
                  <button className="btn-sm" onClick={()=>toast("📅 Abriendo agenda...")}>
                    <Plus size={13} style={{ display:"inline",marginRight:4 }}/>Nueva cita
                  </button>
                </div>
                <div className="section-body">
                  <div className="asesoria-list">
                    {asesorias.map((a,i) => (
                      <div key={i} className="asesoria-item">
                        <div className="asesoria-avatar" style={{ background:`${a.color}22` }}>
                          {a.emoji}
                        </div>
                        <div className="asesoria-info">
                          <div className="asesoria-subject">{a.subject}</div>
                          <div className="asesoria-meta">con {a.asesor}</div>
                          <div style={{ marginTop:5 }}>
                            <span className={`status-badge ${a.status==="confirm"?"confirm":"pending"}`}>
                              {a.status==="confirm" ? <><CheckCircle size={11}/>Confirmada</> : <><Clock size={11}/>Pendiente</>}
                            </span>
                          </div>
                        </div>
                        <div className="asesoria-time">
                          <div className="asesoria-hour">{a.time}</div>
                          <div className="asesoria-date">{a.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* progreso por materia */}
              <div className="section-card anim-fade-up d3">
                <div className="section-header">
                  <span className="section-title">Progreso por Materia</span>
                  <span style={{ color:"var(--text-muted)",fontSize:13 }}>Semestre actual</span>
                </div>
                <div className="section-body">
                  <div className="materias-list">
                    {materias.map((m,i) => (
                      <div key={i} className="materia-row">
                        <div className="materia-header">
                          <span>{m.name}</span>
                          <span className="materia-pct">{m.pct}%</span>
                        </div>
                        <div className="progress-bar-wrap">
                          <div className="progress-bar" style={{ width:`${m.pct}%`,background:m.color }}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* right col */}
            <div style={{ display:"flex",flexDirection:"column",gap:20 }}>

              {/* acciones rápidas */}
              <div className="section-card anim-slide-r d1">
                <div className="section-header">
                  <span className="section-title">Acciones Rápidas</span>
                </div>
                <div className="section-body">
                  <div className="quick-grid">
                    {[
                      { emoji:"🔍",label:"Buscar asesor",    color:"rgba(0,201,167,.15)",  c:"var(--teal)"   },
                      { emoji:"📅",label:"Agendar cita",     color:"rgba(255,183,3,.15)",  c:"var(--amber)"  },
                      { emoji:"📊",label:"Ver historial",    color:"rgba(124,58,237,.15)", c:"#a78bfa"       },
                      { emoji:"💬",label:"Mis mensajes",     color:"rgba(255,107,107,.15)",c:"var(--rose)"   },
                    ].map((q,i) => (
                      <button key={i} className="quick-btn" onClick={()=>toast(`Abriendo ${q.label}...`)}>
                        <div className="quick-icon" style={{ background:q.color }}>
                          <span style={{ fontSize:20 }}>{q.emoji}</span>
                        </div>
                        <span className="quick-label">{q.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* calendario */}
              <div className="section-card anim-slide-r d2">
                <div className="section-header">
                  <span className="section-title">Calendario</span>
                  <span style={{ display:"flex",alignItems:"center",gap:6,color:"var(--text-muted)",fontSize:13 }}>
                    <span style={{ width:8,height:8,borderRadius:"50%",background:"var(--amber)",display:"inline-block" }}/>
                    Asesoría
                  </span>
                </div>
                <div className="section-body">
                  <MiniCalendar />
                </div>
              </div>

              {/* asesores destacados */}
              <div className="section-card anim-slide-r d3">
                <div className="section-header">
                  <span className="section-title">Asesores Destacados</span>
                  <button className="btn-sm" onClick={()=>toast("Mostrando todos...")}>Ver todos</button>
                </div>
                <div className="section-body">
                  <div className="asesor-list">
                    {asesores.map((a,i) => (
                      <div key={i} className="asesor-item">
                        <div className="asesor-avatar" style={{ background:"rgba(255,255,255,.08)" }}>{a.emoji}</div>
                        <div className="asesor-info">
                          <div className="asesor-name">{a.name}</div>
                          <div className="asesor-subject">{a.subject}</div>
                          <div className="asesor-rating">
                            <Star size={13} fill="var(--amber)"/>
                            {a.rating}
                            <span style={{ color:"var(--text-muted)",fontWeight:400,fontSize:12 }}>({a.reviews})</span>
                          </div>
                        </div>
                        <button className="btn-sm" onClick={()=>toast(`Solicitando cita con ${a.name}...`)}>
                          Agendar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showToast && (
        <div className="toast">
          <Zap size={16} color="var(--teal)"/>
          <span style={{ fontSize:14,fontWeight:500 }}>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      <style>{STYLES}</style>
      {page === "login"    && <LoginPage    goRegister={()=>setPage("register")} goLogin={()=>setPage("dashboard")} />}
      {page === "register" && <RegisterPage goLogin={()=>setPage("login")} />}
      {page === "dashboard"&& <Dashboard   goLogout={()=>setPage("login")} />}
    </>
  );
}
