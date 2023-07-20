persons=[
         {"name":"sreeram","place":"krishnancoil","hobbies":["cricket,chess,carrom"]},
         {"sslc_mark":{"maths":100,"tamil":98,"enlish":80,"science":85,"social":90}},
         {"name":"abinaya","place":"vattavilai","hobbies":["mobile","movies","games"]},
         {"sslc_mark":{"maths":90,"tamil":95,"english":85,"science":97,"social":80}},
         {"name":"AJ Ajitha","place":"kannankulam","hobbies":["mobile","games","movies"]},
         {"sslc_mark":{"maths":98,"tamil":97,"english":89,"science":88,"social":70}},
         {"name":"dhanush","place":"peruvilai","hobbies":["cricket","football","chess"]},
         {"sslc_mark":{"maths":95,"tamil":78,"english":80,"science":79,"social":90}},
         {"name":"satheesh","place":"ngl","hobbies":["cricket","chess","carrom"]},
         {"sslc_mark":{"maths":94,"tamil":88,"english":81,"science":88,"social":93}},
        ]


# for person in persons:
#     if "sslc_mark"==persons:
#         total=sslc_mark+person
#         print

# def calculate_total_sslc_mark(person):
#     if "sslc_mark" in person:
#         marks = person["sslc_mark"]
#         total = sum(marks.values())
#         return total
#     return None

# for person in persons:
#     total_sslc_mark = calculate_total_sslc_mark(person)
#     if total_sslc_mark is not None:

#         print(total_sslc_mark)

def calculate_sslc_totals(persons_data):
    sslc_totals = {}

    for person_data in persons_data:
        if "sslc_mark" in person_data:
            name = person_data["name"]
            sslc_marks = person_data["sslc_mark"]
            total_mark = sum(sslc_marks.values())

            sslc_totals[name] = total_mark

    return sslc_totals

sslcs_totals = calculate_sslc_totals(persons)


for name, total in sslc_totals.items():
    print(f"{name}: Total SSLC Mark - {total}")


   
        
      
    