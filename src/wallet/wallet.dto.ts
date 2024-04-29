import { IsString } from 'class-validator';
import { WalletEntity } from 'src/entities/wallet.entity';

export class WalletCreateDto {
  @IsString()
  signature: string;

  @IsString()
  address: string;
}

export class WalletLoginDto {
  @IsString()
  signature: string;
}

export class WalletCreateResponse {
  wallet: WalletEntity;
  accessToken: string;
}
