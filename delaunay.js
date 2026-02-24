// Delaunay-inspired circular forms background (Orphism style)
class DelaunayBackground {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.circles = [];
    this.numCircles = options.numCircles || 15;
    this.colors = options.colors || [
      'rgba(47, 75, 124, 0.08)',
      'rgba(74, 111, 165, 0.06)',
      'rgba(214, 90, 49, 0.07)',
      'rgba(241, 231, 220, 0.12)',
      'rgba(95, 107, 115, 0.05)',
      'rgba(47, 75, 124, 0.04)',
      'rgba(214, 90, 49, 0.05)'
    ];
    
    this.init();
    this.draw();
    
    window.addEventListener('resize', () => {
      this.init();
      this.draw();
    });
  }
  
  init() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    
    this.circles = [];
    for (let i = 0; i < this.numCircles; i++) {
      this.circles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 120 + 60,
        color: this.colors[Math.floor(Math.random() * this.colors.length)]
      });
    }
  }
  
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw overlapping circles
    this.circles.forEach(circle => {
      this.ctx.fillStyle = circle.color;
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Add concentric rings for more Delaunay-like effect
      this.ctx.strokeStyle = circle.color.replace(/[\d.]+\)$/, '0.15)');
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.radius * 0.7, 0, Math.PI * 2);
      this.ctx.stroke();
      
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.radius * 0.4, 0, Math.PI * 2);
      this.ctx.stroke();
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new DelaunayBackground('delaunay-canvas', {
    numCircles: 12,
    colors: [
      'rgba(47, 75, 124, 0.08)',
      'rgba(74, 111, 165, 0.06)',
      'rgba(214, 90, 49, 0.07)',
      'rgba(241, 231, 220, 0.15)',
      'rgba(95, 107, 115, 0.05)',
      'rgba(47, 75, 124, 0.05)',
      'rgba(214, 90, 49, 0.04)'
    ]
  });
});

