import { Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class AppUpdate {
  constructor() {}

  @Start()
  async start(ctx: Context) {
    await ctx.reply('Не пиши сюда больше!');
  }
}
