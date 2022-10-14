import dynamoose from 'dynamoose';

const AddressSchema = new dynamoose.Schema({
  street: String,
  city: String,
  postcode: String,
  country: String,
});

const InvoiceItemSchema = new dynamoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});

export const InvoiceSchema = new dynamoose.Schema(
  {
    id: String,
    name: String,
    email: String,
    address: {
      type: Object,
      schema: AddressSchema,
    },
    invoiceDate: String,
    paymentDate: String,
    projectDescription: String,
    invoiceItems: {
      type: Array,
      schema: [InvoiceItemSchema],
    },
  },
  {
    timestamps: true,
  }
);
