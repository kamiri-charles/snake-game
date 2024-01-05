export const detect_rect_circ_collision = (rect, circle) => (
    circle.x + circle.radius >= rect.x &&
    circle.x - circle.radius <= rect.x + rect.width &&
    circle.y + circle.radius >= rect.y &&
    circle.y - circle.radius <= rect.y + rect.height
);