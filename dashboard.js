const kpis = [
  { label: 'Revenue', value: '$1.8M', trend: '+18%', detail: 'vs last week' },
  { label: 'Active users', value: '74.2K', trend: '+12%', detail: 'live sessions' },
  { label: 'Conversion', value: '8.9%', trend: '+1.6%', detail: 'product purchase rate' },
  { label: 'Support uptime', value: '99.92%', trend: 'Stable', detail: 'operations health' },
]

const growthData = [
  { label: 'Mon', value: 34 },
  { label: 'Tue', value: 46 },
  { label: 'Wed', value: 58 },
  { label: 'Thu', value: 67 },
  { label: 'Fri', value: 74 },
  { label: 'Sat', value: 82 },
  { label: 'Sun', value: 92 },
]

const productPerformance = [
  { name: 'Checkout flow', score: 89, sentiment: 'Strong' },
  { name: 'Inventory sync', score: 75, sentiment: 'Healthy' },
  { name: 'Mobile onboarding', score: 94, sentiment: 'Excellent' },
  { name: 'Pricing engine', score: 68, sentiment: 'Improving' },
]

const operations = [
  { title: 'Live API latency', value: '112ms', status: 'online' },
  { title: 'Database load', value: '62%', status: 'warning' },
  { title: 'Queue backlog', value: '3 items', status: 'online' },
  { title: 'Scheduled deploy', value: 'Today • 18:00', status: 'upcoming' },
]

const alerts = [
  'Revenue rate is +18% above target for the week.',
  'Inventory sync delays reduced by 34% since yesterday.',
  'Mobile onboarding retention climbed to 77%.',
]

const timeline = [
  { time: '09:00', event: 'Marketing pulse campaign launched' },
  { time: '11:30', event: 'Top-selling SKU restocked' },
  { time: '14:20', event: 'New product onboarding flow deployed' },
  { time: '16:45', event: 'Operations alert resolved' },
]

const kpiContainer = document.getElementById('kpi-grid')
const growthChart = document.getElementById('growth-chart')
const productTable = document.getElementById('product-table')
const statusList = document.getElementById('status-list')
const activityList = document.getElementById('activity-list')
const timelineList = document.getElementById('timeline-list')
const rangeButtons = document.querySelectorAll('.range-chip')
const rangeLabel = document.getElementById('range-label')
const backButton = document.getElementById('back-btn')
const refreshButton = document.getElementById('refresh-btn')

function renderKpis() {
  if (!kpiContainer) return
  kpiContainer.innerHTML = kpis
    .map(
      (metric) => `
      <article class="kpi-card">
        <span class="kpi-label">${metric.label}</span>
        <strong>${metric.value}</strong>
        <span class="kpi-trend">${metric.trend}</span>
        <p>${metric.detail}</p>
      </article>
    `,
    )
    .join('')
}

function renderGrowth(range = 'Weekly') {
  if (!growthChart || !rangeLabel) return
  growthChart.innerHTML = growthData
    .map(
      (point) => `
      <div class="growth-bar-group">
        <div class="growth-bar" style="height: ${point.value}%;">
          <span>${point.value}%</span>
        </div>
        <small>${point.label}</small>
      </div>
    `,
    )
    .join('')

  rangeLabel.textContent = range
}

function renderProducts() {
  if (!productTable) return
  productTable.innerHTML = productPerformance
    .map(
      (product) => `
      <div class="product-row">
        <span>${product.name}</span>
        <strong>${product.score}%</strong>
        <span class="status-pill status-pill--${product.sentiment.toLowerCase()}">${product.sentiment}</span>
      </div>
    `,
    )
    .join('')
}

function renderStatus() {
  if (!statusList) return
  statusList.innerHTML = operations
    .map(
      (item) => `
      <div class="status-row">
        <div>
          <p>${item.title}</p>
          <small>${item.value}</small>
        </div>
        <span class="status-pill status-pill--${item.status}">${item.status}</span>
      </div>
    `,
    )
    .join('')
}

function renderActivity() {
  if (!activityList || !timelineList) return
  activityList.innerHTML = alerts
    .map((alert) => `
      <div class="activity-item">
        <span>•</span>
        <p>${alert}</p>
      </div>
    `)
    .join('')

  timelineList.innerHTML = timeline
    .map(
      (event) => `
      <div class="timeline-item">
        <strong>${event.time}</strong>
        <p>${event.event}</p>
      </div>
    `,
    )
    .join('')
}

renderKpis()
renderGrowth()
renderProducts()
renderStatus()
renderActivity()

rangeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const range = button.textContent || 'Weekly'
    renderGrowth(range)
    rangeButtons.forEach((btn) => btn.classList.toggle('range-chip--active', btn === button))
  })
})

if (backButton) {
  backButton.addEventListener('click', () => {
    window.location.href = '../index.html'
  })
}

if (refreshButton) {
  refreshButton.addEventListener('click', () => {
    window.location.reload()
  })
}
