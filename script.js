const servicos = {
    consultoria: {
        icon: '<i class="fa-solid fa-briefcase"></i>',
        title: 'Consultoria Empresarial',
        desc: 'Oferecemos aconselhamento estratégico e suporte à gestão para empresas de todos os tamanhos. A nossa equipa analisa o seu negócio em profundidade e desenvolve planos de ação personalizados para impulsionar o crescimento e a eficiência operacional.',
        benefits: ['Diagnóstico completo do negócio', 'Plano estratégico personalizado', 'Apoio na tomada de decisões críticas', 'Acompanhamento contínuo dos resultados', 'Redução de custos e aumento de produtividade'],
        msg: 'Olá! Gostaria de saber mais sobre o serviço de Consultoria Empresarial da MCS.'
    },
    recrutamento: {
        icon: '<i class="fa-solid fa-users-gear"></i>',
        title: 'Recrutamento e Seleção',
        desc: 'Ajudamos a sua empresa a encontrar os melhores talentos do mercado. Gerimos todo o processo de recrutamento — desde a definição do perfil até à integração do novo colaborador.',
        benefits: ['Triagem e seleção criteriosa de candidatos', 'Entrevistas estruturadas e testes de competências', 'Verificação de referências profissionais', 'Apoio no processo de onboarding', 'Garantia de substituição em caso de desadequação'],
        msg: 'Olá! Gostaria de saber mais sobre o serviço de Recrutamento e Seleção da MCS.'
    },
    transporte: {
        icon: '<i class="fa-solid fa-car"></i>',
        title: 'Aluguer de Transporte',
        desc: 'Disponibilizamos uma frota moderna e diversificada para empresas e particulares em Nacala e região. Desde carros executivos a viaturas de carga, temos a solução certa para as suas necessidades.',
        benefits: ['Frota variada: sedans, SUVs e minivans', 'Motoristas experientes e profissionais', 'Disponibilidade 24h com marcação prévia', 'Tarifas competitivas para contratos mensais', 'Manutenção e seguro incluídos'],
        msg: 'Olá! Gostaria de saber mais sobre o serviço de Aluguer de Transporte da MCS.'
    },
    encomendas: {
        icon: '<i class="fa-solid fa-truck-fast"></i>',
        title: 'Serviços de Encomendas',
        desc: 'Realizamos entregas rápidas, seguras e rastreáveis em Nacala e arredores. Seja para empresas com alto volume de envios ou para particulares com entregas pontuais, garantimos chegada no prazo acordado.',
        benefits: ['Entrega no mesmo dia (zona urbana)', 'Rastreamento em tempo real', 'Manuseamento cuidadoso de encomendas frágeis', 'Comprovativo de entrega digital', 'Planos mensais para empresas com volume regular'],
        msg: 'Olá! Gostaria de saber mais sobre o serviço de Encomendas da MCS.'
    },
    limpeza: {
        icon: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
        title: 'Limpeza Profissional',
        desc: 'Oferecemos serviços de limpeza para escritórios, residências, espaços comerciais e eventos. A nossa equipa utiliza produtos de alta qualidade e técnicas eficientes para garantir ambientes impecáveis.',
        benefits: ['Limpeza profunda e de manutenção', 'Produtos eco-friendly e certificados', 'Equipa treinada e uniformizada', 'Contratos semanais, quinzenais ou mensais', 'Serviço de lavandaria e passagem a ferro incluído'],
        msg: 'Olá! Gostaria de saber mais sobre o serviço de Limpeza Profissional da MCS.'
    },
    jardins: {
        icon: '<i class="fa-solid fa-leaf"></i>',
        title: 'Manutenção de Jardins',
        desc: 'Cuidamos de jardins residenciais e empresariais com atenção e profissionalismo. Da poda à rega automatizada, a nossa equipa mantém os espaços verdes sempre saudáveis e esteticamente agradáveis.',
        benefits: ['Corte e poda de relva e arbustos', 'Adubação e tratamento de pragas', 'Plantação de novas espécies', 'Instalação de sistemas de rega automática', 'Visitas periódicas agendadas conforme necessidade'],
        msg: 'Olá! Gostaria de saber mais sobre o serviço de Manutenção de Jardins da MCS.'
    },
    treinamentos: {
        icon: '<i class="fa-solid fa-shield-halved"></i>',
        title: 'Treinamentos Especializados',
        desc: 'Oferecemos formações certificadas em HST (Higiene e Segurança no Trabalho), HSSE (Saúde, Segurança, Social e Ambiente) e Condução Defensiva. Capacite a sua equipa, reduza acidentes e garanta conformidade legal na sua empresa.',
        benefits: [
            'Formação em HST — prevenção de riscos e acidentes no local de trabalho',
            'Formação em HSSE — gestão integrada de saúde, segurança e impacto ambiental',
            'Condução Defensiva — redução de acidentes de viação e custos operacionais',
            'Certificação reconhecida entregue no final de cada formação',
            'Formações presenciais adaptadas ao contexto da sua empresa',
            'Turmas in-company ou abertas ao público'
        ],
        msg: 'Olá! Gostaria de saber mais sobre os Treinamentos (HST, HSSE e Condução Defensiva) da MCS.'
    }
};

function openModal(key) {
    const s = servicos[key];
    document.getElementById('modalIcon').innerHTML = s.icon;
    document.getElementById('modalTitle').textContent = s.title;
    document.getElementById('modalDesc').textContent = s.desc;
    const ul = document.getElementById('modalBenefits');
    ul.innerHTML = s.benefits.map(b => `<li>${b}</li>`).join('');
    const waNum = (typeof getSettings === 'function' ? getSettings().whatsapp : '258873152962');
    document.getElementById('modalWhatsapp').href = `https://wa.me/${waNum}?text=${encodeURIComponent(s.msg)}`;
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}
function closeModalOnOverlay(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});
navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.replace('fa-xmark','fa-bars');
    });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('vis'), 80);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.anim').forEach(el => observer.observe(el));


/* =========================================================
   MCS — MÓDULO DE OPORTUNIDADES, CANDIDATURAS E ADMINISTRAÇÃO
   Nota: os dados (vagas, candidaturas e configurações) são
   guardados no localStorage do navegador. Como este é um site
   estático (sem servidor/base de dados), estes dados ficam
   guardados apenas neste computador/navegador. Para partilhar
   as vagas e receber candidaturas de forma centralizada para
   todos os visitantes, será necessário um backend real no futuro.
   ========================================================= */

const LS_KEYS = {
    vagas: 'mcs_vagas',
    candidaturas: 'mcs_candidaturas',
    settings: 'mcs_settings',
    adminPass: 'mcs_admin_pass',
    session: 'mcs_admin_session'
};

const DEFAULT_VAGAS = [
    {
        id: 'v1', titulo: 'Motorista Profissional', area: 'Transporte', local: 'Nacala Porto',
        tipo: 'Tempo Inteiro', ativa: true,
        descricao: 'Procuramos motorista profissional para integrar a nossa frota de aluguer de transporte, com foco em serviço executivo e atendimento de excelência a clientes empresariais.',
        requisitos: ['Carta de condução válida (categoria B)', 'Mínimo de 3 anos de experiência comprovada', 'Conhecimento das ruas de Nacala e região', 'Boa apresentação e postura profissional', 'Disponibilidade para horários flexíveis'],
        dataPublicacao: Date.now() - 86400000 * 3
    },
    {
        id: 'v2', titulo: 'Técnico(a) de Limpeza', area: 'Limpeza', local: 'Nacala Porto',
        tipo: 'Tempo Inteiro', ativa: true,
        descricao: 'Vaga para técnico(a) de limpeza para atuar em escritórios e espaços comerciais de clientes da MCS, garantindo ambientes impecáveis e seguindo protocolos de qualidade.',
        requisitos: ['Experiência anterior em limpeza profissional (preferencial)', 'Pontualidade e responsabilidade', 'Capacidade de trabalhar em equipa', 'Disponibilidade imediata'],
        dataPublicacao: Date.now() - 86400000 * 6
    },
    {
        id: 'v3', titulo: 'Formador(a) HST / HSSE', area: 'Formação', local: 'Nacala Porto',
        tipo: 'Contrato Temporário', ativa: true,
        descricao: 'Procuramos formador(a) certificado(a) para ministrar ações de formação em Higiene e Segurança no Trabalho (HST) e HSSE junto de empresas parceiras da MCS.',
        requisitos: ['Certificação em HST e/ou HSSE', 'Experiência em formação a adultos', 'Excelente capacidade de comunicação', 'Disponibilidade para deslocações in-company'],
        dataPublicacao: Date.now() - 86400000 * 10
    },
    {
        id: 'v4', titulo: 'Assistente Administrativo', area: 'Administração', local: 'Nacala Porto',
        tipo: 'Tempo Inteiro', ativa: true,
        descricao: 'Vaga para assistente administrativo(a) para dar apoio à gestão de operações diárias, atendimento a clientes e organização documental da MCS.',
        requisitos: ['Domínio de Microsoft Office (Word, Excel)', 'Boa capacidade de organização', 'Nível 12 ou superior', 'Proatividade e atenção ao detalhe'],
        dataPublicacao: Date.now() - 86400000 * 1
    }
];

const DEFAULT_SETTINGS = {
    whatsapp: '258873152962',
    email: 'michconsultoria@outlook.com',
    endereco: 'Rua do Hospital-Bairro Cimento, Moamba, Moçambique',
    facebook: '', instagram: '', linkedin: '',
    stat1Num: '7+', stat1Lbl: 'Serviços',
    stat2Num: '24h', stat2Lbl: 'Resposta'
};

const DEFAULT_ADMIN_PASS = 'mcs2026admin';

let selectedCVData = null;
let selectedCVName = null;
let currentCandidaturaVagaId = null;

/* ---------- Helpers de armazenamento ---------- */
function lsGet(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
}
function lsSet(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { console.error('Erro ao guardar dados:', e); }
}
function getVagas() { return lsGet(LS_KEYS.vagas, []); }
function setVagas(v) { lsSet(LS_KEYS.vagas, v); }
function getCandidaturas() { return lsGet(LS_KEYS.candidaturas, []); }
function setCandidaturas(c) { lsSet(LS_KEYS.candidaturas, c); }
function getSettings() { return lsGet(LS_KEYS.settings, DEFAULT_SETTINGS); }
function setSettings(s) { lsSet(LS_KEYS.settings, s); }

function seedDataIfNeeded() {
    if (!localStorage.getItem(LS_KEYS.vagas)) setVagas(DEFAULT_VAGAS);
    if (!localStorage.getItem(LS_KEYS.settings)) setSettings(DEFAULT_SETTINGS);
    if (!localStorage.getItem(LS_KEYS.candidaturas)) setCandidaturas([]);
    if (!localStorage.getItem(LS_KEYS.adminPass)) localStorage.setItem(LS_KEYS.adminPass, btoa(DEFAULT_ADMIN_PASS));
}

/* ---------- Toast ---------- */
function showToast(msg, type = 'success') {
    const toast = document.getElementById('appToast');
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i> ${msg}`;
    toast.className = `toast show ${type}`;
    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => { toast.classList.remove('show'); }, 4000);
}

/* ---------- Render Vagas (público) ---------- */
function populateAreaFilter() {
    const vagas = getVagas();
    const areas = [...new Set(vagas.filter(v => v.ativa).map(v => v.area))];
    const select = document.getElementById('filtroArea');
    const current = select.value || 'todas';
    select.innerHTML = '<option value="todas">Todas as áreas</option>' + areas.map(a => `<option value="${a}">${a}</option>`).join('');
    select.value = areas.includes(current) ? current : 'todas';
}

function renderVagas() {
    const container = document.getElementById('vagasContainer');
    const filtro = document.getElementById('filtroArea').value;
    const vagas = getVagas().filter(v => v.ativa && (filtro === 'todas' || v.area === filtro));

    if (vagas.length === 0) {
        container.innerHTML = `<div class="vagas-empty"><i class="fa-solid fa-inbox"></i>Não há vagas abertas nesta área de momento. Volte a visitar-nos em breve ou envie uma candidatura espontânea.</div>`;
        return;
    }

    container.innerHTML = vagas.map(v => `
        <div class="vaga-card">
            <div class="vaga-card-top">
                <h3>${v.titulo}</h3>
                <span class="vaga-card-area">${v.area}</span>
            </div>
            <div class="vaga-card-meta">
                <span><i class="fa-solid fa-location-dot"></i> ${v.local}</span>
                <span><i class="fa-solid fa-clock"></i> ${v.tipo}</span>
            </div>
            <p class="vaga-desc">${v.descricao.length > 130 ? v.descricao.slice(0, 130) + '…' : v.descricao}</p>
            <div class="vaga-card-actions">
                <button class="btn-info" onclick="openVagaDetalhe('${v.id}')">Ver Detalhes <i class="fa-solid fa-arrow-right"></i></button>
                <button class="btn-info" style="background:var(--primary);color:white;border-color:var(--primary);" onclick="openCandidaturaModal('${v.id}')">Candidatar-se</button>
            </div>
        </div>
    `).join('');
}

/* ---------- Detalhe da Vaga ---------- */
function openVagaDetalhe(id) {
    const v = getVagas().find(x => x.id === id);
    if (!v) return;
    document.getElementById('vagaDetalheTitle').textContent = v.titulo;
    document.getElementById('vagaDetalheTags').innerHTML = `
        <span><i class="fa-solid fa-location-dot"></i> ${v.local}</span>
        <span><i class="fa-solid fa-clock"></i> ${v.tipo}</span>
        <span><i class="fa-solid fa-layer-group"></i> ${v.area}</span>
    `;
    document.getElementById('vagaDetalheDesc').textContent = v.descricao;
    document.getElementById('vagaDetalheRequisitos').innerHTML = v.requisitos.map(r => `<li>${r}</li>`).join('');
    document.getElementById('vagaDetalheCandidatarBtn').onclick = () => { closeVagaDetalhe(); openCandidaturaModal(v.id); };
    document.getElementById('vagaDetalheOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeVagaDetalhe() {
    document.getElementById('vagaDetalheOverlay').classList.remove('active');
    document.body.style.overflow = '';
}
function closeVagaDetalheOnOverlay(e) { if (e.target === document.getElementById('vagaDetalheOverlay')) closeVagaDetalhe(); }

/* ---------- Modal de Candidatura ---------- */
function openCandidaturaModal(vagaId) {
    currentCandidaturaVagaId = vagaId;
    selectedCVData = null; selectedCVName = null;
    document.getElementById('candidaturaForm').reset();
    document.getElementById('fileUploadWrap').classList.remove('has-file');
    document.getElementById('fileUploadLabel').textContent = 'Clique para anexar o seu CV';
    document.getElementById('candidaturaStatusMsg').textContent = '';

    const vagas = getVagas().filter(v => v.ativa);
    const select = document.getElementById('candVaga');
    select.innerHTML = vagas.map(v => `<option value="${v.id}">${v.titulo}</option>`).join('') + `<option value="">Candidatura Espontânea</option>`;
    select.value = vagaId || '';

    if (vagaId) {
        const v = vagas.find(x => x.id === vagaId);
        document.getElementById('candidaturaTitle').textContent = 'Candidatar-se a: ' + (v ? v.titulo : '');
        document.getElementById('candidaturaVagaInfo').textContent = v ? `${v.local} · ${v.tipo} · ${v.area}` : '';
    } else {
        document.getElementById('candidaturaTitle').textContent = 'Candidatura Espontânea';
        document.getElementById('candidaturaVagaInfo').textContent = 'Guardamos o seu perfil para futuras oportunidades compatíveis.';
    }
    document.getElementById('candidaturaOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeCandidaturaModal() {
    document.getElementById('candidaturaOverlay').classList.remove('active');
    document.body.style.overflow = '';
}
function closeCandidaturaOnOverlay(e) { if (e.target === document.getElementById('candidaturaOverlay')) closeCandidaturaModal(); }

function handleCVSelect(e) {
    const file = e.target.files[0];
    const msgEl = document.getElementById('candidaturaStatusMsg');
    msgEl.textContent = ''; msgEl.className = 'candidatura-status-msg';
    if (!file) return;
    const validTypes = ['.pdf', '.doc', '.docx'];
    const ext = '.' + file.name.split('.').pop().toLowerCase();
    if (!validTypes.includes(ext)) {
        msgEl.textContent = 'Formato inválido. Envie um ficheiro PDF, DOC ou DOCX.';
        msgEl.className = 'candidatura-status-msg error';
        e.target.value = '';
        return;
    }
    if (file.size > 4 * 1024 * 1024) {
        msgEl.textContent = 'O ficheiro excede o limite de 4MB.';
        msgEl.className = 'candidatura-status-msg error';
        e.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = function (ev) {
        selectedCVData = ev.target.result;
        selectedCVName = file.name;
        const wrap = document.getElementById('fileUploadWrap');
        wrap.classList.add('has-file');
        document.getElementById('fileUploadLabel').textContent = file.name;
    };
    reader.readAsDataURL(file);
}

function submitCandidatura(e) {
    e.preventDefault();
    const msgEl = document.getElementById('candidaturaStatusMsg');
    const nome = document.getElementById('candNome').value.trim();
    const email = document.getElementById('candEmail').value.trim();
    const telefone = document.getElementById('candTelefone').value.trim();
    const vagaId = document.getElementById('candVaga').value;
    const mensagem = document.getElementById('candMensagem').value.trim();

    if (!selectedCVData) {
        msgEl.textContent = 'Por favor anexe o seu CV antes de enviar.';
        msgEl.className = 'candidatura-status-msg error';
        return;
    }

    const vagas = getVagas();
    const vagaObj = vagas.find(v => v.id === vagaId);
    const candidaturas = getCandidaturas();
    candidaturas.unshift({
        id: 'c' + Date.now(),
        nome, email, telefone,
        vagaId: vagaId || null,
        vagaTitulo: vagaObj ? vagaObj.titulo : 'Candidatura Espontânea',
        mensagem,
        cvNome: selectedCVName,
        cvData: selectedCVData,
        data: Date.now(),
        status: 'Novo'
    });
    setCandidaturas(candidaturas);
    updateCandCountBadge();

    closeCandidaturaModal();
    showToast('Candidatura enviada com sucesso! Entraremos em contacto em breve.', 'success');
}

/* =========================================================
   ADMINISTRAÇÃO
   ========================================================= */
function openAdminLogin() {
    document.getElementById('adminPassInput').value = '';
    document.getElementById('adminLoginMsg').textContent = '';
    document.getElementById('adminLoginOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeAdminLogin() {
    document.getElementById('adminLoginOverlay').classList.remove('active');
    document.body.style.overflow = '';
}
function closeAdminLoginOnOverlay(e) { if (e.target === document.getElementById('adminLoginOverlay')) closeAdminLogin(); }

function submitAdminLogin(e) {
    e.preventDefault();
    const input = document.getElementById('adminPassInput').value;
    const stored = localStorage.getItem(LS_KEYS.adminPass);
    if (btoa(input) === stored) {
        closeAdminLogin();
        openAdminPanel();
    } else {
        document.getElementById('adminLoginMsg').textContent = 'Palavra-passe incorreta. Tente novamente.';
        document.getElementById('adminLoginMsg').className = 'candidatura-status-msg error';
    }
}

function openAdminPanel() {
    document.getElementById('adminPanelOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    switchAdminTab('vagas');
    renderVagasTable();
    renderCandidaturasTable();
    populateConfigForm();
    updateCandCountBadge();
}
function closeAdminPanel() {
    document.getElementById('adminPanelOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
}

function updateCandCountBadge() {
    const novos = getCandidaturas().filter(c => c.status === 'Novo').length;
    const badge = document.getElementById('candCountBadge');
    if (badge) badge.textContent = novos;
}

/* ---------- Admin: Vagas ---------- */
function renderVagasTable() {
    const vagas = getVagas();
    const tbody = document.getElementById('vagasTableBody');
    if (vagas.length === 0) {
        tbody.innerHTML = `<tr class="admin-table-empty"><td colspan="6">Ainda não existem vagas criadas.</td></tr>`;
        return;
    }
    tbody.innerHTML = vagas.map(v => `
        <tr>
            <td><strong>${v.titulo}</strong></td>
            <td>${v.area}</td>
            <td>${v.local}</td>
            <td>${v.tipo}</td>
            <td><span class="admin-badge-status ${v.ativa ? 'ativa' : 'inativa'}">${v.ativa ? 'Ativa' : 'Inativa'}</span></td>
            <td>
                <button class="admin-icon-btn" title="Editar" onclick="openVagaForm('${v.id}')"><i class="fa-solid fa-pen"></i></button>
                <button class="admin-icon-btn danger" title="Eliminar" onclick="deleteVaga('${v.id}')"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

function openVagaForm(id) {
    document.getElementById('vagaForm').reset();
    document.getElementById('vagaId').value = id || '';
    if (id) {
        const v = getVagas().find(x => x.id === id);
        document.getElementById('vagaFormTitleLabel').textContent = 'Editar Vaga';
        document.getElementById('vagaTitulo').value = v.titulo;
        document.getElementById('vagaArea').value = v.area;
        document.getElementById('vagaLocal').value = v.local;
        document.getElementById('vagaTipo').value = v.tipo;
        document.getElementById('vagaAtiva').value = String(v.ativa);
        document.getElementById('vagaDescricao').value = v.descricao;
        document.getElementById('vagaRequisitos').value = v.requisitos.join('\n');
    } else {
        document.getElementById('vagaFormTitleLabel').textContent = 'Nova Vaga';
        document.getElementById('vagaAtiva').value = 'true';
    }
    document.getElementById('vagaFormOverlay').classList.add('active');
}
function closeVagaForm() { document.getElementById('vagaFormOverlay').classList.remove('active'); }
function closeVagaFormOnOverlay(e) { if (e.target === document.getElementById('vagaFormOverlay')) closeVagaForm(); }

function saveVaga(e) {
    e.preventDefault();
    const id = document.getElementById('vagaId').value;
    const vagas = getVagas();
    const dados = {
        titulo: document.getElementById('vagaTitulo').value.trim(),
        area: document.getElementById('vagaArea').value.trim(),
        local: document.getElementById('vagaLocal').value.trim(),
        tipo: document.getElementById('vagaTipo').value,
        ativa: document.getElementById('vagaAtiva').value === 'true',
        descricao: document.getElementById('vagaDescricao').value.trim(),
        requisitos: document.getElementById('vagaRequisitos').value.split('\n').map(r => r.trim()).filter(Boolean)
    };
    if (id) {
        const idx = vagas.findIndex(v => v.id === id);
        vagas[idx] = { ...vagas[idx], ...dados };
    } else {
        vagas.unshift({ id: 'v' + Date.now(), dataPublicacao: Date.now(), ...dados });
    }
    setVagas(vagas);
    renderVagasTable();
    populateAreaFilter();
    renderVagas();
    closeVagaForm();
    showToast('Vaga guardada com sucesso.', 'success');
}

function deleteVaga(id) {
    if (!confirm('Tem a certeza que deseja eliminar esta vaga?')) return;
    setVagas(getVagas().filter(v => v.id !== id));
    renderVagasTable();
    populateAreaFilter();
    renderVagas();
    showToast('Vaga eliminada.', 'success');
}

/* ---------- Admin: Candidaturas ---------- */
function renderCandidaturasTable() {
    const candidaturas = getCandidaturas();
    const tbody = document.getElementById('candidaturasTableBody');
    if (candidaturas.length === 0) {
        tbody.innerHTML = `<tr class="admin-table-empty"><td colspan="7">Ainda não recebeu candidaturas.</td></tr>`;
        return;
    }
    tbody.innerHTML = candidaturas.map(c => `
        <tr>
            <td><strong>${c.nome}</strong>${c.mensagem ? `<br><span style="color:var(--muted);font-size:0.8rem;">"${c.mensagem.slice(0,60)}${c.mensagem.length>60?'…':''}"</span>` : ''}</td>
            <td>${c.email}<br>${c.telefone}</td>
            <td>${c.vagaTitulo}</td>
            <td>${new Date(c.data).toLocaleDateString('pt-PT')}</td>
            <td><a href="${c.cvData}" download="${c.cvNome}" class="admin-icon-btn success" style="display:inline-flex;align-items:center;justify-content:center;text-decoration:none;" title="Descarregar CV"><i class="fa-solid fa-download"></i></a></td>
            <td>
                <select class="admin-status-select" onchange="updateCandidaturaStatus('${c.id}', this.value)">
                    ${['Novo','Em Análise','Aprovado','Rejeitado'].map(s => `<option value="${s}" ${c.status===s?'selected':''}>${s}</option>`).join('')}
                </select>
            </td>
            <td><button class="admin-icon-btn danger" title="Eliminar" onclick="deleteCandidatura('${c.id}')"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `).join('');
}

function updateCandidaturaStatus(id, status) {
    const candidaturas = getCandidaturas();
    const idx = candidaturas.findIndex(c => c.id === id);
    if (idx > -1) { candidaturas[idx].status = status; setCandidaturas(candidaturas); updateCandCountBadge(); }
}

function deleteCandidatura(id) {
    if (!confirm('Eliminar esta candidatura?')) return;
    setCandidaturas(getCandidaturas().filter(c => c.id !== id));
    renderCandidaturasTable();
    updateCandCountBadge();
    showToast('Candidatura eliminada.', 'success');
}

function clearAllCandidaturas() {
    if (!confirm('Isto irá eliminar TODAS as candidaturas recebidas. Continuar?')) return;
    setCandidaturas([]);
    renderCandidaturasTable();
    updateCandCountBadge();
    showToast('Todas as candidaturas foram eliminadas.', 'success');
}

/* ---------- Admin: Configurações ---------- */
function populateConfigForm() {
    const s = getSettings();
    document.getElementById('cfgWhatsapp').value = s.whatsapp;
    document.getElementById('cfgEmail').value = s.email;
    document.getElementById('cfgEndereco').value = s.endereco;
    document.getElementById('cfgFacebook').value = s.facebook;
    document.getElementById('cfgInstagram').value = s.instagram;
    document.getElementById('cfgLinkedin').value = s.linkedin;
    document.getElementById('cfgStat1Num').value = s.stat1Num;
    document.getElementById('cfgStat1Lbl').value = s.stat1Lbl;
    document.getElementById('cfgStat2Num').value = s.stat2Num;
    document.getElementById('cfgStat2Lbl').value = s.stat2Lbl;
    document.getElementById('cfgNovaSenha').value = '';
}

function saveSettings(e) {
    e.preventDefault();
    const s = {
        whatsapp: document.getElementById('cfgWhatsapp').value.trim(),
        email: document.getElementById('cfgEmail').value.trim(),
        endereco: document.getElementById('cfgEndereco').value.trim(),
        facebook: document.getElementById('cfgFacebook').value.trim(),
        instagram: document.getElementById('cfgInstagram').value.trim(),
        linkedin: document.getElementById('cfgLinkedin').value.trim(),
        stat1Num: document.getElementById('cfgStat1Num').value.trim(),
        stat1Lbl: document.getElementById('cfgStat1Lbl').value.trim(),
        stat2Num: document.getElementById('cfgStat2Num').value.trim(),
        stat2Lbl: document.getElementById('cfgStat2Lbl').value.trim()
    };
    setSettings(s);
    const novaSenha = document.getElementById('cfgNovaSenha').value.trim();
    if (novaSenha) localStorage.setItem(LS_KEYS.adminPass, btoa(novaSenha));

    applySettings();
    const msgEl = document.getElementById('configStatusMsg');
    msgEl.textContent = 'Configurações guardadas com sucesso.';
    msgEl.className = 'candidatura-status-msg success';
    showToast('Configurações atualizadas.', 'success');
}

/* ---------- Aplicar configurações ao site público ---------- */
function applySettings() {
    const s = getSettings();

    document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
        const url = new URL(a.href);
        const textParam = url.searchParams.get('text');
        a.href = `https://wa.me/${s.whatsapp}` + (textParam ? `?text=${encodeURIComponent(textParam)}` : '');
    });

    const emailEl = document.getElementById('contactEmailText');
    if (emailEl) emailEl.textContent = s.email;
    const addrEl = document.getElementById('contactAddressText');
    if (addrEl) addrEl.textContent = s.endereco;
    const phoneEl = document.getElementById('contactPhoneText');
    if (phoneEl) phoneEl.textContent = '+' + s.whatsapp.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4');

    if (s.facebook) document.getElementById('socialFacebook').href = s.facebook;
    if (s.instagram) document.getElementById('socialInstagram').href = s.instagram;
    if (s.linkedin) document.getElementById('socialLinkedin').href = s.linkedin;

    const h1 = document.getElementById('heroStat1Num'), l1 = document.getElementById('heroStat1Lbl');
    const h2 = document.getElementById('heroStat2Num'), l2 = document.getElementById('heroStat2Lbl');
    if (h1) h1.textContent = s.stat1Num;
    if (l1) l1.textContent = s.stat1Lbl;
    if (h2) h2.textContent = s.stat2Num;
    if (l2) l2.textContent = s.stat2Lbl;
}

/* ---------- Inicialização ---------- */
document.addEventListener('DOMContentLoaded', () => {
    seedDataIfNeeded();
    populateAreaFilter();
    renderVagas();
    applySettings();
    updateCandCountBadge();
});
