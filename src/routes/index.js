import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
import SignIn from "modules/generic/authenticate/signin";
import SignUp from "modules/generic/authenticate/signup";
import ForgotPassword from "modules/generic/authenticate/ForgotPassword";
import ChangedPassword from "modules/generic/authenticate/ChangedPassword";
import Dashboard from "modules/dashboard";
import Settings from "modules/settings";
import Account from "modules/account";
import AdminAccounts from 'modules/admin/accounts';
import StaffAccounts from 'modules/admin/StaffAccounts';
import Support from 'modules/support';
import Requests from 'modules/requests';
import ViewRequests from 'modules/requests/view/index';
import Plans from 'modules/partner/plans';
import Monitoring from 'modules/partner/monitoring';
import Withdrawals from 'modules/withdrawals';
import Ledgers from 'modules/ledgers';
import Coupons from 'modules/coupons';
import Scopes from 'modules/scopes';
import TransferCharges from 'modules/transferCharges';
import DeliveryFees from 'modules/deliveryFees';
import Referral from 'modules/referals';
import CashIn from 'modules/cashin';
import CashOut from 'modules/cashout';
import CashOutTransaction from 'modules/cashoutTransaction';
import FundsInClearing from 'modules/fundsInClearing';
import Tickets from 'modules/support/tickets';
import ViewTickets from 'modules/support/tickets/view';
import ViewPlans from 'modules/partner/plans/detailsModal';
import EnableSupport from 'modules/requests/support';
import Forex from 'modules/forex/index';
import ForexRates from 'modules/forex/rates/index';
import DirectTransfers from 'modules/directTransfer/index';
import Balance from 'modules/balance';
import Preregister from 'modules/admin/Preregister';
import Campaigns from 'modules/campaigns';
import Community from 'modules/partner/community';
import Schedules from 'modules/humanResource/schedules';
import Services from 'modules/services';
import S2RA from 'modules/s2ra';
import S2RAWallet from 'modules/s2raWallets';
import walletAccounting from 'modules/walletAccounting';
import sendMoney from 'modules/sendMoney';
import FeesComparison from 'modules/feesComparison';
import TransactionLimits from 'modules/transactionLimits';
import PlusMinus from 'modules/plusMinus';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/forgot_password" exact component={ForgotPassword} />
      <Route path="/change_password/:email/:code" exact component={ChangedPassword} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/settings" exact component={Settings} isPrivate />
      <Route path="/account" exact component={Account} isPrivate />
      <Route path="/support" exact component={Support} isPrivate />
      <Route path="/requests" exact component={Requests} isPrivate />
      <Route path="/requests/view/:code" exact component={ViewRequests} isPrivate />
      <Route path="/requests/support" exact component={EnableSupport} isPrivate />
      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/monitoring" exact component={Monitoring} isPrivate />
      <Route path="/withdrawals" exact component={Withdrawals} isPrivate />
      <Route path="/ledgers" exact component={Ledgers} isPrivate />
      <Route path="/coupons" exact component={Coupons} isPrivate />
      <Route path="/scopes" exact component={Scopes} isPrivate />
      <Route path="/transfer_charges" exact component={TransferCharges} isPrivate />
      <Route path="/delivery_fees" exact component={DeliveryFees} isPrivate />
      <Route path="/referrals" exact component={Referral} isPrivate />
      <Route path="/accounts" exact component={AdminAccounts} isPrivate />
      <Route path="/staff_accounts" exact component={StaffAccounts} isPrivate />
      <Route path="/cashins" exact component={CashIn} isPrivate />
      <Route path="/cashouts" exact component={CashOut} isPrivate />
      <Route path="/cashout_transactions" exact component={CashOutTransaction} isPrivate />
      <Route path="/funds_in_clearing" exact component={FundsInClearing} isPrivate />
      <Route path="/tickets" exact component={Tickets} isPrivate />
      <Route path="/tickets/view/:code" exact component={ViewTickets} isPrivate />
      <Route path="/plan/view/:code" exact component={ViewPlans} isPrivate />
      <Route path="/forex" exact component={Forex} isPrivate />
      <Route path="/forex_rates" exact component={ForexRates} isPrivate />
      <Route path="/send_to_wallets" exact component={DirectTransfers} isPrivate />
      <Route path="/balance_inquiry" exact component={Balance} isPrivate />
      <Route path="/preregister" exact component={Preregister} isPrivate />
      <Route path="/campaigns" exact component={Campaigns} isPrivate />
      <Route path="/community" exact component={Community} isPrivate />
      <Route path="/schedules" exact component={Schedules} isPrivate />
      <Route path="/services" exact component={Services} isPrivate />
      <Route path="/s2ra" exact component={S2RA} isPrivate />
      <Route path="/s2ra_wallets" exact component={S2RAWallet} isPrivate />
      <Route path="/wallet_accounting" exact component={walletAccounting} isPrivate />
      <Route path="/send_money" exact component={sendMoney} isPrivate />
      <Route path="/fees_comparison" exact component={FeesComparison} isPrivate />
      <Route path="/transaction_limits" exact component={TransactionLimits} isPrivate />
      <Route path="/plus_minus" exact component={PlusMinus} isPrivate />
      <Route component={SignIn} />
    </Switch>
  )
}