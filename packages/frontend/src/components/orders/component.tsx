import { PageTitle } from 'components/primitives';
import { Form, UserOrders } from './primitives';

export const Orders = () => (
  <PageTitle title="HISTORY">
    <div>
      <div>
        <Form />
      </div>
      <div>
        <UserOrders />
      </div>
    </div>
  </PageTitle>
);
