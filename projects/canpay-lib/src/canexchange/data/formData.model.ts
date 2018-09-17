export class FormData {
    currency: string = '';
    address: string = '';
    email: string = '';
    amount: number = 0;
    accept: boolean = false;
    usd: number = 0;
    key: string = '';
    hash: string = '';
    date: string = '';
    eth: number = 0;
    id: string = '';
    erc20token: string = '';
    erc20tokenDecimal: number = 0;

    clear() {
        this.currency = '';
        this.address = '';
        this.email = '';
        this.amount = 0;
        this.erc20token = '';
        this.usd = 0;
        this.key = '';
        this.hash = '';
        this.date = '';
        this.eth = 0;
        this.erc20token = '';
        this.id = '';
    }
}

export class Personal {
    currency: string = '';
    address: string = '';
    email: string = '';
    amount: number = 0;
    usd: number = 0;
    hash: string = '';
    date: string = '';
}

