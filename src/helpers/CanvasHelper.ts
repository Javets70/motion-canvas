import {Context} from 'konva/lib/Context';

export namespace CanvasHelper {
  export function roundRect<T extends CanvasRenderingContext2D | Context>(
    ctx: T,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ): T {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    ctx.beginPath();
    roundRectPath(ctx, x, y, width, height, radius);
    ctx.closePath();

    return ctx;
  }

  export function roundRectPath<
    T extends CanvasRenderingContext2D | Context | Path2D,
  >(
    ctx: T,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ): T {
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);

    return ctx;
  }
}
