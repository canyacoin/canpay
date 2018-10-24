export class FormData {
    currency = '';
    address = '';
    email = '';
    amount = 0;
    accept = false;
    usd = 0;
    key = '';
    hash = '';
    date = '';
    eth = 0;
    id = '';
    erc20token = '';
    erc20tokenDecimal = 0;

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
    currency = '';
    address = '';
    email = '';
    amount = 0;
    usd = 0;
    hash = '';
    date = '';
}

