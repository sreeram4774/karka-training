consumer_data = {
    "consumer_name": "rahul",
    "eb_reading": [1100, 1200, 1350, 1650, 2050]
}
def calculate_electricity_bill(consumer_data):
    consumer_name = consumer_data["consumer_name"]
    eb_reading = consumer_data["eb_reading"]

    bill_amounts = []
    total_bill_amount = 0
unit_counsumed=consumer_data["eb_reading"]    
# for i in consumer_data:
#     if  total_bill_amount<100:
for unit in unit_counsumed:
    if unit 1100<1200:
        bill_amounts.append(0)
    elif unit 1200<1350:
        bill_amounts.append(2*units)     
    elif unit 1350<1650:
        bill_amount.append(5*units)
    elif unit 1650<2050:
        bill_amount.append(10*units)
    else:
        bill_amount.append(14*units)
total_bill_amount=sum(bill_amounts)
print(total_bill_amount)        




    


        

    

    
