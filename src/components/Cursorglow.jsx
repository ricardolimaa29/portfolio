import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let x = 0, y = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      x += (mouseX - x) * 0.08;
      y += (mouseY - y) * 0.08;

      glow.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return null;
}