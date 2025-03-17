import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import anime from "animejs/lib/anime.es.js";
import "./Intro.css";
import Logo from "../assets/log.png";

const Intro = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const rendererRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) return;

    // Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Simple Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Liquid Metal Sphere
    const geometry = new THREE.SphereGeometry(2, 32, 32); // Reduced segments for simplicity
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color("#000000") }, // Black metal
        splitProgress: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        uniform float time;
        uniform float splitProgress;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec3 pos = position;
          float ripple = sin(pos.x * 3.0 + time) * 0.1;
          pos += normal * ripple;
          pos.x += sign(pos.x) * splitProgress * 2.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying vec3 vNormal;
        void main() {
          float diff = max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
          gl_FragColor = vec4(color + vec3(diff * 0.5), 1.0 - splitProgress);
        }
      `,
      transparent: true,
    });
    const liquidMetal = new THREE.Mesh(geometry, material);
    scene.add(liquidMetal);
    camera.position.z = 5;

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      material.uniforms.time.value += 0.05;
      renderer.render(scene, camera);
    };
    animate();

    // Anime.js Timeline
    anime
      .timeline({ easing: "easeOutSine" })
      // Sphere Arrival (Simple Grow)
      .add({
        targets: liquidMetal.scale,
        x: [0, 1],
        y: [0, 1],
        z: [0, 1],
        duration: 1000,
      })
      // Sphere Splits
      .add({
        targets: material.uniforms.splitProgress,
        value: [0, 1],
        duration: 1500,
        update: () => {
          liquidMetal.material.needsUpdate = true;
        },
      }, "-=500")
      // Text Arrival (Slide and Fade)
      .add({
        targets: textRef.current,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 2000,
        update: (anim) => {
          if (textRef.current) {
            const progress = anim.progress / 100;
            textRef.current.style.color = `hsl(0, 0%, ${progress * 100}%)`; // Black to white
          }
        },
      }, "-=1200")
      // Logo Arrival (Spin and Fade)
      .add({
        targets: logoRef.current,
        rotate: [180, 0], // Simple 2D spin
        opacity: [0, 1],
        duration: 1000,
      }, "-=800")
      // Exit Screen (Shrink and Dissolve)
      .add({
        targets: [textRef.current, logoRef.current],
        scale: [1, 0.5],
        opacity: [1, 0],
        duration: 800,
        easing: "easeInSine",
      }, "+=500")
      .add({
        targets: containerRef.current,
        opacity: [1, 0],
        duration: 500,
        complete: () => navigate("/home"),
      }, "-=300");

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      scene.remove(liquidMetal);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [navigate]);

  return (
    <div ref={containerRef} className="intro-container">
      <h1 ref={textRef} className="intro-text" style={{ opacity: 0 }}>
        Welcome to OrcadeHub
      </h1>
      <img
        ref={logoRef}
        src={Logo}
        alt="OrcadeHub Logo"
        className="intro-logo"
        style={{ opacity: 0 }}
      />
    </div>
  );
};

export default Intro;