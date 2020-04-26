import json
from os import listdir

# given a folder path open the text file in the folder and convert
# it to an info.json file


def is_image_file(filename):
    return filename.split('.')[-1] in ['jpg', 'jpeg', 'png']


def image_paths(folder_path):
    paths = filter(is_image_file, listdir(folder_path))
    return sorted(map(lambda path: 'items/' + folder_path + '/' + path, paths))


def get_folder_information(folder_path):
    f = open(folder_path + '/info.txt', 'r')
    info = {}
    info['imgs'] = image_paths(folder_path)
    for i, line in enumerate(f.read().splitlines()):
        if i == 0:
            title, desc = line.split(':', 1)
            info[title] = desc
        elif i == 1:
            info['descriptions'] = [line]
        else:
            info['descriptions'].append(line)

    json_file = open(folder_path + '/info.json', 'w+')
    json.dump(info, json_file, indent=2)
    f.close()
    json_file.close()
    return info


if __name__ == '__main__':
    from sys import argv
    if len(argv) > 1:
        path = argv[1]
        get_folder_information(path)
    else:
        data = []
        for i in range(1, 8):
            result = get_folder_information('item' + str(i))
            data.append(result)
        print(data)
