import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { WalletEntity } from 'src/entities/wallet.entity';
import {
  WalletCreateDto,
  WalletCreateResponse,
  WalletLoginDto,
} from 'src/wallet/wallet.dto';
import { WalletService } from 'src/wallet/wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  genCreateWallet(@Body() dto: WalletCreateDto): Promise<WalletCreateResponse> {
    return this.walletService.genCreateWallet(dto);
  }

  @Post('login')
  genLoginWallet(@Body() dto: WalletLoginDto): Promise<WalletEntity> {
    return this.walletService.genBySignature(dto.signature);
  }

  @Get('address/:address')
  genByAddress(@Query('address') address: string): Promise<WalletEntity> {
    return this.walletService.genByAddress(address);
  }
}
