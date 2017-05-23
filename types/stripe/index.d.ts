// Type definitions for stripe 4.x
// Project: https://stripe.com/
// Definitions by: Andy Hawkins <https://github.com/a904guy/,http://a904guy.com>
//                 Eric J. Smith <https://github.com/ejsmith/>
//                 Amrit Kahlon <https://github.com/amritk/>
//                 Adam Cmiel <https://github.com/adamcmiel>
//                 Justin Leider <https://github.com/jleider>
//                 Cameron Edwards <https://github.com/cameronprattedwards>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = stripe;
export as namespace stripe;

declare namespace stripe {
    interface PaginationRequest {
        limit?: number;
        starting_after?: number;
        ending_before?: number;
    }

    interface CurrencyBalance {
        currency: string;
        amount: number;
        source_types: any;
    }

    interface Balance {
        object: "balance_transaction";
        available: CurrencyBalance[];
        livemode: boolean;
        pending: CurrencyBalance[];
    }

    interface FeeDetail {
        amount: number;
        application: string;
        currency: string;
        description: string;
        type: string;
    }

    interface BalanceTransaction {
        id: string;
        object: "balance_transaction";
        amount: number;
        available_on: number;
        created: number;
        currency: string;
        description: string;
        fee: number;
        fee_details: FeeDetail[];
        net: number;
        source: string;
        status: string;
        type: string;
    }

    interface ChargeOutcome {
        network_status: string;
        reason: string;
        risk_level: string;
        rule: string;
        seller_message: string;
        type: string;
    }

    interface RefundList extends List {
        data: Refund[];
    }

    interface Refund {
        id: string;
        object: "list";
        amount: number;
        balance_transaction: string;
        charge: string;
        created: number;
        currency: string;
        description: string;
        metadata: any;
        reason: string;
        receipt_number: string;
        status: string;
    }

    interface Address {
        city: string;
        country: string;
        line1: string;
        line2: string;
        postal_code: string;
        state: string;
    }

    interface Shipping {
        address: Address;
        carrier: string;
        name: string;
        phone: string;
        tracking_number: string;
    }

    interface Charge {
        id: string;
        object: "charge";
        amount: number;
        amount_refunded: number;
        application: string;
        application_fee: string;
        balance_transaction: string;
        captured: boolean;
        created: number;
        currency: string;
        customer: string;
        description: string;
        destination: string;
        dispute: string;
        failure_code: string;
        failure_message: string;
        fraud_details: any;
        invoice: string;
        livemode: boolean;
        metadata: any;
        on_behalf_of: string;
        order: string;
        outcome: ChargeOutcome;
        paid: boolean;
        receipt_email: string;
        receipt_number: string;
        refunded: boolean;
        refunds: RefundList;
        review: string;
        shipping: Shipping;
        source: any;
        source_transfer: string;
        statement_descriptor: string;
        status: string;
        transfer: string;
        transfer_group: string;
    }

    interface Source {
        exp_month: string;
        exp_year: string;
        number: string;
        object: "card";
        cvc: string;
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        name?: string;
        address_state?: string;
        address_zip?: string;
    }

    interface CreateChargeRequest {
        amount: number;
        currency: string;
        application_fee?: number;
        capture?: boolean;
        description?: string;
        destination?: any;
        transfer_group?: string;
        on_behalf_of?: string;
        metadata?: {};
        receipt_email?: string;
        shipping?: Shipping;
        customer?: string;
        source: string;
        source: Source;
        statement_descriptor?: string;
    }

    interface UpdateChargeRequest {
        description?: string;
        fraud_details?: any;
        metadata?: any;
        receipt_email?: string;
        shipping?: Shipping;
        transfer_group?: string;
    }

    interface CaptureChargeRequest {

    }

    interface Charges {
        retrieve(id: string): Promise<Charge>;
        create(CreateChargeRequest): Promise<Charge>;
        update(id: string, request: UpdateChargeRequest): Promise<Charge>;
        capture(id: string);
    }

    interface List {
        object: "list";
        url: string;
        has_more: boolean;
    }

    interface BalanceTransactionList extends List {
        data: BalanceTransaction[];
    }

    interface QueryObject {
        gt?: string;
        gte?: string;
        lt?: string;
        lte?: string;
    }

    interface BalanceTransactionListRequest extends PaginationRequest {
        available_on?: string;
        available_on?: QueryObject;
        created?: string;
        created?: QueryObject;
        currency?: string;
        payout?: string;
        source?: string;
        type?: string;
    }

    interface Balances {
        retrieve(): Promise<Balance>;
        retrieveTransaction(id: string): Promise<BalanceTransaction>;
        listTransactions(): Promise<BalanceTransactionList>;
    }

    interface Stripe {
        charges: Charges;
        balance: Balance;
        setApiVersion(version: string): void;
    }
    function stripeFactory(apiKey: string): Stripe;
    export default stripeFactory;
}
