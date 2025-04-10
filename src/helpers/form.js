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

  if (!formData.budget) {
    newErrors.budget = 'Budget is required';
    isValid = false;
  }

  const bedroomSelection = formData.bedrooms;
  if (!bedroomSelection.oneBed && !bedroomSelection.twoBed && !bedroomSelection.studio) {
    newErrors.bedrooms = 'Please select which apartment you are interested in';
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
  bedrooms: {
    studio: false,
    oneBed: false,
    twoBed: false,
  },
  leaseStartDate: '',
  pets: {
    yes: false,
    no: false
  },
  parking: {
    yes: false,
    no: false,
  },
  attribution: '',
}

export const budgetOptions = [
  { label: 'Select Your Budget*', value: 'default' },
  { label: '$2,000–$2,500', value: '500' },
  { label: '$2,500–$3,000', value: '1000' },
  { label: '$3,000–$3,500', value: '1500' },
  { label: '$3,500–$4,000', value: '2000' },
  { label: '$4,000+', value: '2500' },
];

export const attributionOptions = [
  { label: 'How Did You Hear About Us?', value: 'default' },
  { label: 'REFERRAL', value: 'REFERRAL' },
  { label: 'SOCIAL MEDIA', value: 'SOCIAL MEDIA' },
  { label: 'REALTOR', value: 'REALTOR' },
  { label: 'OTHER', value: 'OTHER' },
];