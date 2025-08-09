import React from 'react';
import PriceCard from './PriceCard';

const Price = () => {
  const plans = [
    {
      title: 'Basic',
      description: 'Unlimited usage and advanced features',
      price: '£10',
      features: ['Unlimited static codes', 'Save QR codes', 'Download codes in JPEG'],
      isPopular: false,
    },
    {
      title: 'Starter',
      description: 'Unlimited usage and advanced features',
      price: '£15',
      features: ['10 Dynamic Codes', 'Advanced code types', 'Scan analytics', 'High quality downloads'],
      isPopular: true,
    },
    {
      title: 'Professional',
      description: 'Unlimited usage and advanced features',
      price: '£85',
      features: ['Unlimited Dynamic Codes', 'Account Management', 'Create folders', 'Generate labels', 'Manage campaigns'],
      isPopular: false,
    },
  ];

  return (
    <div className="flex justify-center items-start mt-20 gap-4 px-4 pb-16 mr-4">
      {plans.map((plan, index) => (
        <PriceCard key={index} index={index} {...plan} />
      ))}
    </div>
  );
};

export default Price;