export const validateForm = (formData) => {
  let isValid = true;
  const newErrors = {};

  if (!formData.name) {
    newErrors.name = 'Name is required';
    isValid = false;
  }

  if (!formData.email) {
    newErrors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is not valid';
    isValid = false;
  }

  if (!formData.phone) {
    newErrors.phone = 'Phone is required';
    isValid = false;
  }

  if (!formData.budget || formData.budget === "default") {
    newErrors.budget = 'Budget is required';
    isValid = false;
  }

  if (!formData.bedrooms || formData.bedrooms === "default") {
    newErrors.bedrooms = 'Bedrooms is required';
    isValid = false;
  }

  if (!formData.leaseStartDate) {
    newErrors.leaseStartDate = 'Preferred move-in date is required';
    isValid = false;
  }

  return { isValid, newErrors };
};

export const defaultFormErrors = {};
export const defaultFormOptions = {
  name: '',
  email: '',
  phone: '',
  budget: '',
  bedrooms: '',
  leaseStartDate: '',
  pets: '',
  parking: '',
  attribution: ''
}

export const bedroomOptions = [
  { label: 'Please choose an option', value: 'default' },
  { label: 'Studio', value: 'Studio' },
  { label: '1 Bed', value: '1 Bed' },
  { label: '2 Bed', value: '2 Bed' },
]

export const petOptions = [
  { label: 'Please choose an option', value: 'default' },
  { label: 'Yes', value: 'Yes' },
  { label: 'No', value: 'No' },
]

export const parkingOptions = [
  { label: 'Please choose an option', value: 'default' },
  { label: 'Yes', value: 'Yes' },
  { label: 'No', value: 'No' },
]

export const budgetOptions = [
  { label: 'Please choose an option', value: 'default' },
  { label: '$2,000–$2,500', value: '$2,000–$2,500' },
  { label: '$2,500–$3,000', value: '$2,500–$3,000' },
  { label: '$3,000–$3,500', value: '$3,000–$3,500' },
  { label: '$3,500–$4,000', value: '$3,500–$4,000' },
  { label: '$4,000+', value: '$4,000+' },
];

export const attributionOptions = [
  { label: 'Please choose an option', value: 'default' },
  { label: 'Referral', value: 'REFERRAL' },
  { label: 'Social Media', value: 'SOCIAL MEDIA' },
  { label: 'Realtor', value: 'REALTOR' },
  { label: 'Other', value: 'OTHER' },
];

export const formSuccessMessage = "Thank you for your submission! Our team will review it and get back to you within 24-48 hours.";
export const formFailureMessage = "There was a problem with your request. Please try again at a later time."