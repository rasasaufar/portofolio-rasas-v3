<template>
  <div>
    <div
      ref="cursorOutline"
      class="cursor-outline"
    ></div>
    <div
      ref="cursorDot"
      class="cursor-dot"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const cursorOutline = ref<HTMLElement | null>(null)
const cursorDot = ref<HTMLElement | null>(null)

let isHovering = false

const onMouseMove = (e: MouseEvent) => {
  const x = e.clientX
  const y = e.clientY

  if (cursorDot.value) {
    cursorDot.value.style.left = `${x}px`
    cursorDot.value.style.top = `${y}px`
  }

  // Use requestAnimationFrame for smooth outline tracking
  if (cursorOutline.value) {
    cursorOutline.value.animate({
      left: `${x}px`,
      top: `${y}px`
    }, { duration: 500, fill: 'forwards' })
  }
}

const onMouseDown = () => {
  if (cursorOutline.value) {
    cursorOutline.value.classList.add('clicking')
  }
}

const onMouseUp = () => {
  if (cursorOutline.value) {
    cursorOutline.value.classList.remove('clicking')
  }
}

// Keep track of elements we've already bound listeners to
const boundElements = new WeakSet()

const addHoverListeners = () => {
  const interactableElements = document.querySelectorAll('a, button, input, textarea, select, .cursor-pointer, [role="button"]')
  
  interactableElements.forEach((el) => {
    if (!boundElements.has(el)) {
      boundElements.add(el)
      
      el.addEventListener('mouseenter', () => {
        isHovering = true
        if (cursorOutline.value) cursorOutline.value.classList.add('hovering')
        if (cursorDot.value) cursorDot.value.classList.add('hovering')
      })
      el.addEventListener('mouseleave', () => {
        isHovering = false
        if (cursorOutline.value) cursorOutline.value.classList.remove('hovering')
        if (cursorDot.value) cursorDot.value.classList.remove('hovering')
      })
    }
  })
}

let observer: MutationObserver

onMounted(() => {
  // Only initialize custom cursor for pointing devices
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    nextTick(() => {
      addHoverListeners()
    })

    observer = new MutationObserver(() => {
      addHoverListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.cursor-dot {
  position: fixed;
  top: -100px;
  left: -100px;
  width: 6px;
  height: 6px;
  background-color: #00f3ff; /* cyber-cyan */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  transition: width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out;
  box-shadow: 0 0 10px 2px rgba(0, 243, 255, 0.8);
}

.cursor-outline {
  position: fixed;
  top: -100px;
  left: -100px;
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(183, 33, 255, 0.8); /* cyber-purple */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
  transition: width 0.2s ease-out, height 0.2s ease-out, border-color 0.2s ease-out, background-color 0.2s ease-out, transform 0.1s ease-out;
  box-shadow: 0 0 15px rgba(183, 33, 255, 0.4);
}

.cursor-dot.hovering {
  width: 10px;
  height: 10px;
  background-color: #b721ff; /* cyber-purple */
  box-shadow: 0 0 15px rgba(183, 33, 255, 0.9);
}

.cursor-outline.hovering {
  width: 50px;
  height: 50px;
  border-color: #00f3ff; /* cyber-cyan */
  background-color: rgba(0, 243, 255, 0.05); /* very subtle cyan bg */
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.5);
}

.cursor-outline.clicking {
  transform: translate(-50%, -50%) scale(0.7);
  background-color: rgba(183, 33, 255, 0.15);
}

/* Hide complete custom cursor on touch devices */
@media (hover: none) and (pointer: coarse) {
  .cursor-dot, .cursor-outline {
    display: none !important;
  }
}
</style>
